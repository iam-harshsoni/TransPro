using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixDesintaionSpellingInRoutesModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Desitnation",
                table: "Routes",
                newName: "Destination");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Destination",
                table: "Routes",
                newName: "Desitnation");
        }
    }
}
