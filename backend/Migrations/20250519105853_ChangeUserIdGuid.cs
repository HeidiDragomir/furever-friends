using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class ChangeUserIdGuid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 5);

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Users",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Users",
                type: "char(36)",
                nullable: false,
                collation: "ascii_general_ci",
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Password", "Username" },
                values: new object[,]
                {
                    { new Guid("2cbf1e38-94e5-4d86-a19a-ecaa65936a0e"), "test5@test.se", "test5", "test5" },
                    { new Guid("9de747b6-2026-49b4-b83a-b9fa4b2ac70e"), "test1@test.se", "test1", "test1" },
                    { new Guid("a9bb2ecc-e45f-451e-bb76-3937f43c66dc"), "test3@test.se", "test3", "test3" },
                    { new Guid("b6079694-8b16-40f7-8489-c2245c5c5cc4"), "test4@test.se", "test4", "test4" },
                    { new Guid("e7838127-7522-4684-885b-3d5f89e0f449"), "test2@test.se", "test2", "test2" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_Username",
                table: "Users",
                column: "Username",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Users_Username",
                table: "Users");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("2cbf1e38-94e5-4d86-a19a-ecaa65936a0e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("9de747b6-2026-49b4-b83a-b9fa4b2ac70e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("a9bb2ecc-e45f-451e-bb76-3937f43c66dc"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("b6079694-8b16-40f7-8489-c2245c5c5cc4"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("e7838127-7522-4684-885b-3d5f89e0f449"));

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Users",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "char(36)")
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                .OldAnnotation("Relational:Collation", "ascii_general_ci");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Password", "Username" },
                values: new object[,]
                {
                    { 1, "test1@test.se", "test1", "test1" },
                    { 2, "test2@test.se", "test2", "test2" },
                    { 3, "test3@test.se", "test3", "test3" },
                    { 4, "test4@test.se", "test4", "test4" },
                    { 5, "test5@test.se", "test5", "test5" }
                });
        }
    }
}
