using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace TransProAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddsOthertables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VesselInvoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    Id2Format = table.Column<string>(type: "text", nullable: false),
                    PartyId = table.Column<int>(type: "integer", nullable: false),
                    CustomerId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselInvoices_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vessels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Prefix = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vessels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VesselVoyages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VesselId = table.Column<int>(type: "integer", nullable: false),
                    ArrivalDate = table.Column<DateOnly>(type: "date", nullable: false),
                    SailingDate = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselVoyages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselVoyages_Vessels_VesselId",
                        column: x => x.VesselId,
                        principalTable: "Vessels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Id2Format = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    VesselId = table.Column<int>(type: "integer", nullable: false),
                    VesselVoyageId = table.Column<int>(type: "integer", nullable: false),
                    ShipmentType = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Jobs_VesselVoyages_VesselVoyageId",
                        column: x => x.VesselVoyageId,
                        principalTable: "VesselVoyages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Jobs_Vessels_VesselId",
                        column: x => x.VesselId,
                        principalTable: "Vessels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    JobId = table.Column<int>(type: "integer", nullable: false),
                    ProductId = table.Column<int>(type: "integer", nullable: false),
                    Dia = table.Column<decimal>(type: "numeric", nullable: false),
                    Pcs = table.Column<decimal>(type: "numeric", nullable: false),
                    Mts = table.Column<decimal>(type: "numeric", nullable: false),
                    Cbm = table.Column<decimal>(type: "numeric", nullable: false),
                    Frt = table.Column<decimal>(type: "numeric", nullable: false),
                    Length = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobProducts_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VesselInvoiceJobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VesselInvoiceId = table.Column<int>(type: "integer", nullable: false),
                    JobId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselInvoiceJobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VesselInvoiceJobs_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VesselInvoiceJobs_VesselInvoices_VesselInvoiceId",
                        column: x => x.VesselInvoiceId,
                        principalTable: "VesselInvoices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobProducts_JobId",
                table: "JobProducts",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobProducts_ProductId",
                table: "JobProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_VesselId",
                table: "Jobs",
                column: "VesselId");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_VesselVoyageId",
                table: "Jobs",
                column: "VesselVoyageId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselInvoiceJobs_JobId",
                table: "VesselInvoiceJobs",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselInvoiceJobs_VesselInvoiceId",
                table: "VesselInvoiceJobs",
                column: "VesselInvoiceId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselInvoices_CustomerId",
                table: "VesselInvoices",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_VesselVoyages_VesselId",
                table: "VesselVoyages",
                column: "VesselId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobProducts");

            migrationBuilder.DropTable(
                name: "VesselInvoiceJobs");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "VesselInvoices");

            migrationBuilder.DropTable(
                name: "VesselVoyages");

            migrationBuilder.DropTable(
                name: "Vessels");
        }
    }
}
