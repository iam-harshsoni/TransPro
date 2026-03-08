using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDirectContainerFKFromTripsCorrectly : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContainerId",
                table: "Trips");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContainerId",
                table: "Trips",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
