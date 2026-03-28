using FluentValidation;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;
using TransProAPI.Infrastructure.Services;

namespace TransProAPI.Features.Auth
{
    public class AuthHandler(AppDbContext _db,
        TokenService _tokenService,
        IValidator<RegisterRequest> _registerValidator,
        IValidator<LoginRequest> _loginValidator,
        IValidator<RefreshTokenRequest> _refreshValidator,
        ILogger<AuthHandler> _logger
        )
    {
        public async Task<ApiResponses<AuthResponse>> RegisterAsync(RegisterRequest request)
        {
            var validation = await _registerValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<AuthResponse>.Fail("Validation failed.", validation.Errors.Select(x => x.ErrorMessage).ToList());

            if (await _db.Users.AnyAsync(x => x.Email == request.Email))
                return ApiResponses<AuthResponse>.Fail("An account with this email already exists");

            // Never store plain-text passwords
            // BCrypt handles salting automatically — no need to manage salt separately
            var user = new User
            {
                FullName = request.FullName,
                Email = request.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                Role = request.Role,
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            // Issue both tokens immediately on register
            // User shouldnt have to log in right after registering
            var (authResponse, refreshToken) = await IssueTokenPairAsync(user);

            _logger.LogInformation("New user registered. UserId: {UserId} Email: {EmailId} Role: {Role}", user.Id, user.Email, user.Role);
            return ApiResponses<AuthResponse>.Ok(authResponse, "Registration successful.");
        }

        public async Task<ApiResponses<AuthResponse>> LoginAsync(LoginRequest request)
        {
            var sw = System.Diagnostics.Stopwatch.StartNew();

            var validation = await _loginValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<AuthResponse>.Fail(
                    "Validation Error",
                    validation.Errors.Select(x => x.ErrorMessage).ToList());

            _logger.LogInformation("Validation: {MS}ms", sw.ElapsedMilliseconds);

            // Normalize email once
            var normalizedEmail = request.Email?.ToLower().Trim();

            // Query only required fields and avoid tracking to reduce DB overhead
            var user = await _db.Users
                .AsNoTracking()
                .Where(u => u.Email == normalizedEmail && u.IsActive)
                .Select(u => new User
                {
                    Id = u.Id,
                    Email = u.Email,
                    PasswordHash = u.PasswordHash,
                    FullName = u.FullName,
                    Role = u.Role,
                    IsActive = u.IsActive
                })
                .FirstOrDefaultAsync();

            _logger.LogInformation("DB Lookup: {MS}ms", sw.ElapsedMilliseconds);

            // Timing-safe: always run BCrypt even if user not found
            // Prevents timing attacks that reveal whether an email exists
            var dummyHash = "$2a$11$dummy.hash.to.prevent.timing.attack.abcdefghijk";
            var passwordToVerify = user?.PasswordHash ?? dummyHash;

            if (!BCrypt.Net.BCrypt.Verify(request.Password, passwordToVerify) || user is null)
                return ApiResponses<AuthResponse>.Fail("Invalid email or password.");

            _logger.LogInformation("BCrypt.Verify: {MS}ms", sw.ElapsedMilliseconds);

            await RevokeAllUserTokenAsync(user.Id, "New Login");

            var (authResponse, refreshToken) = await IssueTokenPairAsync(user);

            _logger.LogInformation(
                "User logged in. UserId: {UserId} Email: {Email}",
                user.Id, user.Email);

            return ApiResponses<AuthResponse>.Ok(authResponse, "Login successful.");
        }

        public async Task<ApiResponses<AuthResponse>> RefreshAsync(RefreshTokenRequest request)
        {
            var validation = await _refreshValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<AuthResponse>.Fail(
                    "Validation failed",
                    validation.Errors.Select(e => e.ErrorMessage).ToList());

            // Look up the refresh token in DB
            var existingToken = await _db.RefreshTokens.Include(rt => rt.User).FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken);

            // Token not found
            if (existingToken is null)
                return ApiResponses<AuthResponse>.Fail("Invalid refresh token.");

            // Token was revoked — possible token theft detected
            if (existingToken.IsRevoked)
            {
                // Security: if a revoked token is used, someone may have stolen it
                // Revoke ALL tokens for this user — force full re-login
                await RevokeAllUserTokenAsync(existingToken.UserId, "Revoked token reuse detected");

                _logger.LogInformation("Revoked toke reuse detected. UserId: {UserId} - all tokens revoked", existingToken.UserId);
                return ApiResponses<AuthResponse>.Fail("This token has been revoked. Please log in again.");
            }

            // Token expired naturally
            if (DateTime.UtcNow >= existingToken.ExpiresAt)
                return ApiResponses<AuthResponse>.Fail("Refresh token has expired. Please log in again.");

            // User account deactivated since token was issued
            if (!existingToken.User.IsActive)
                return ApiResponses<AuthResponse>.Fail("Account is inactive. Please contact support.");

            /* ── Token Rotation
                Revoke the used token — it can never be used again
                Issue a brand new token pair
                This means a stolen refresh token can only be used once before the legitimate user's next refresh invalidates it */
            existingToken.IsRevoked = true;
            existingToken.RevokedAt = DateTime.UtcNow;

            var (authResponse, newRefreshToken) = await IssueTokenPairAsync(existingToken.User);

            _logger.LogInformation("Tokens refreshed. UserId: {UserId}", existingToken.UserId);
            return ApiResponses<AuthResponse>.Ok(authResponse, "Tokens refreshed successfully.");
        }

        public async Task<ApiResponses<string>> LogoutAsync(RefreshTokenRequest request)
        {
            // Use a single, efficient database update to revoke the token without loading the entity into memory
            var affected = await _db.RefreshTokens
                .Where(rt => rt.Token == request.RefreshToken && !rt.IsRevoked)
                .ExecuteUpdateAsync(s => s
                    .SetProperty(rt => rt.IsRevoked, rt => true)
                    .SetProperty(rt => rt.RevokedAt, rt => DateTime.UtcNow));

            if (affected == 0)
                return ApiResponses<string>.Ok("Logged out successfully.");

            _logger.LogInformation("User logged out. Token: {Token}", request.RefreshToken);
            return ApiResponses<string>.Ok("Logged out successfully.");
        }


        /* ── PRIVATE HELPERS
            Issues a new access token + refresh token pair
            Saves the refresh token to DB
            Returns the AuthResponse DTO */
        private async Task<(AuthResponse response, RefreshToken refreshToken)> IssueTokenPairAsync(User user)
        {
            var accessToken = _tokenService.GenerateAccessToken(user);
            var refreshToken = _tokenService.GenerateRefreshToken(user.Id);

            _db.RefreshTokens.Add(refreshToken);
            await _db.SaveChangesAsync();

            var response = new AuthResponse(
                AccessToken: accessToken,
                RefreshToken: refreshToken.Token,
                TokenType: "Bearer",
                ExpiresIn: 15 * 60,
                FullName: user.FullName,
                Role: user.Role
            );

            return (response, refreshToken);
        }

        // Revokes all active refresh tokens for a user
        // Called on: new login, suspicious activity, admin action
        private async Task RevokeAllUserTokenAsync(int userId, string reason)
        {
            // Perform a single, set-based database update to avoid loading many entities into memory
            var now = DateTime.UtcNow;
            var affected = await _db.RefreshTokens
                .Where(rt => rt.UserId == userId && !rt.IsRevoked)
                .ExecuteUpdateAsync(s => s
                    .SetProperty(rt => rt.IsRevoked, rt => true)
                    .SetProperty(rt => rt.RevokedAt, rt => now));

            if (affected > 0)
            {
                _logger.LogInformation("Revoked {Count} tokens for UserId: {UserId}. Reason {Reason}", affected, userId, reason);
            }
        }
    }
}