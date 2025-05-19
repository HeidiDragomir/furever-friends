using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class SeedEvents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    EventId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Time = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Location = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    City = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Type = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.EventId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "EventId", "City", "Date", "Description", "Location", "Time", "Title", "Type" },
                values: new object[,]
                {
                    { new Guid("239e5eae-e375-4c3d-aabe-f0e0155a08d4"), "Göteborg", new DateTime(2025, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Lär dig grunderna i hundträning med en erfaren instruktör.", "Hundtorget", "10:00", "Hundträning för nybörjare", "hund" },
                    { new Guid("381721d3-30e9-4d37-a5c6-3857e3c7eee9"), "Malmö", new DateTime(2025, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ta med din katt och fika tillsammans med andra kattägare.", "Vasastan", "15:00", "Kattfika på innergården", "katt" },
                    { new Guid("94c62bf9-d4f9-4038-8703-f11470f791ce"), "Stockholm", new DateTime(2025, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "Träffa andra hundägare för en gemensam promenad.", "Slottsparken", "08:00", "Morgonpromenad i parken", "hund" },
                    { new Guid("a03e1f67-dbb2-4f85-9521-021f6adc0fca"), "Uppsala", new DateTime(2025, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Kom och titta på vackra katter från hela landet.", "Mässcentrum", "13:00", "Kattutställning", "katt" },
                    { new Guid("bdfac5f4-d23d-4670-949e-52119fa39833"), "Lund", new DateTime(2025, 5, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ett socialt evenemang för både hund- och kattägare.", "Stadsparken", "16:00", "Hund & Katt-mingel", "blandat" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Password", "Username" },
                values: new object[,]
                {
                    { new Guid("60bb5280-397e-47fc-be0d-9dcf0118621a"), "test5@test.se", "test5", "test5" },
                    { new Guid("6ac04be7-0947-446f-8775-72f98bfafa60"), "test3@test.se", "test3", "test3" },
                    { new Guid("933d78e1-c9bb-46e6-96db-cd52c52d8471"), "test1@test.se", "test1", "test1" },
                    { new Guid("be994d0d-4abd-4458-9695-60939ff64a53"), "test2@test.se", "test2", "test2" },
                    { new Guid("c3f6c9e5-df43-4e3d-a3e4-730ac2110946"), "test4@test.se", "test4", "test4" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("60bb5280-397e-47fc-be0d-9dcf0118621a"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("6ac04be7-0947-446f-8775-72f98bfafa60"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("933d78e1-c9bb-46e6-96db-cd52c52d8471"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("be994d0d-4abd-4458-9695-60939ff64a53"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("c3f6c9e5-df43-4e3d-a3e4-730ac2110946"));

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
        }
    }
}
