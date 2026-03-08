using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDirectContainerFKFromTrips : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trips_Containers_ContainerId",
                table: "Trips");

            migrationBuilder.DropIndex(
                name: "IX_Trips_ContainerId",
                table: "Trips");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Trips_ContainerId",
                table: "Trips",
                column: "ContainerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_Containers_ContainerId",
                table: "Trips",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
