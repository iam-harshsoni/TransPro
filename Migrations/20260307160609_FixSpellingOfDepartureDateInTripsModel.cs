using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixSpellingOfDepartureDateInTripsModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DeparturedDate",
                table: "Trips",
                newName: "DepartureDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DepartureDate",
                table: "Trips",
                newName: "DeparturedDate");
        }
    }
}
