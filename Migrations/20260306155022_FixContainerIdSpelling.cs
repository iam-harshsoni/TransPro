using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixContainerIdSpelling : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TripContainers_Containers_ContianerId",
                table: "TripContainers");

            migrationBuilder.RenameColumn(
                name: "ContianerId",
                table: "TripContainers",
                newName: "ContainerId");

            migrationBuilder.RenameIndex(
                name: "IX_TripContainers_ContianerId",
                table: "TripContainers",
                newName: "IX_TripContainers_ContainerId");

            migrationBuilder.AddForeignKey(
                name: "FK_TripContainers_Containers_ContainerId",
                table: "TripContainers",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TripContainers_Containers_ContainerId",
                table: "TripContainers");

            migrationBuilder.RenameColumn(
                name: "ContainerId",
                table: "TripContainers",
                newName: "ContianerId");

            migrationBuilder.RenameIndex(
                name: "IX_TripContainers_ContainerId",
                table: "TripContainers",
                newName: "IX_TripContainers_ContianerId");

            migrationBuilder.AddForeignKey(
                name: "FK_TripContainers_Containers_ContianerId",
                table: "TripContainers",
                column: "ContianerId",
                principalTable: "Containers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
