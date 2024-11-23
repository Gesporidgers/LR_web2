using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LR_web2.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "travels",
                columns: table => new
                {
                    Id = table.Column<long>(type: "INTEGER", nullable: false)
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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "travels");
        }
    }
}
