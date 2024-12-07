using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LR_web2.Server.Migrations
{
    /// <inheritdoc />
    public partial class название_миграции : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "travels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    ShortDesc = table.Column<string>(type: "TEXT", nullable: true),
                    ImgSrc = table.Column<string>(type: "TEXT", nullable: true),
                    Cost = table.Column<ushort>(type: "INTEGER", nullable: true),
                    LongDesc = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_travels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "images",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    productId = table.Column<int>(type: "INTEGER", nullable: true),
                    path = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_images", x => x.id);
                    table.ForeignKey(
                        name: "FK_images_travels_productId",
                        column: x => x.productId,
                        principalTable: "travels",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "properties",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    productId = table.Column<int>(type: "INTEGER", nullable: true),
                    property_price = table.Column<uint>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_properties", x => x.id);
                    table.ForeignKey(
                        name: "FK_properties_travels_productId",
                        column: x => x.productId,
                        principalTable: "travels",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_images_productId",
                table: "images",
                column: "productId");

            migrationBuilder.CreateIndex(
                name: "IX_properties_productId",
                table: "properties",
                column: "productId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "images");

            migrationBuilder.DropTable(
                name: "properties");

            migrationBuilder.DropTable(
                name: "travels");
        }
    }
}
