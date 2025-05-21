using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class seedItems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("239e5eae-e375-4c3d-aabe-f0e0155a08d4"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("381721d3-30e9-4d37-a5c6-3857e3c7eee9"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("94c62bf9-d4f9-4038-8703-f11470f791ce"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("a03e1f67-dbb2-4f85-9521-021f6adc0fca"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("bdfac5f4-d23d-4670-949e-52119fa39833"));

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

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    ItemId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Image = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AltImage = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Location = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Username = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Type = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.ItemId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "EventId", "City", "Date", "Description", "Location", "Time", "Title", "Type" },
                values: new object[,]
                {
                    { new Guid("2b979c9a-4a60-45a8-9534-ad6f01c2312b"), "Göteborg", new DateTime(2025, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Lär dig grunderna i hundträning med en erfaren instruktör.", "Hundtorget", "10:00", "Hundträning för nybörjare", "hund" },
                    { new Guid("53eeb5d2-d197-42fe-b3b9-1e62cf4342b5"), "Uppsala", new DateTime(2025, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Kom och titta på vackra katter från hela landet.", "Mässcentrum", "13:00", "Kattutställning", "katt" },
                    { new Guid("6d33fbf3-0627-4d2f-b383-dd6f03f6b480"), "Stockholm", new DateTime(2025, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "Träffa andra hundägare för en gemensam promenad.", "Slottsparken", "08:00", "Morgonpromenad i parken", "hund" },
                    { new Guid("ac06e62e-808d-49f4-b655-69bc13ac6b8f"), "Malmö", new DateTime(2025, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ta med din katt och fika tillsammans med andra kattägare.", "Vasastan", "15:00", "Kattfika på innergården", "katt" },
                    { new Guid("c3757654-8450-4352-886d-3690c1bc243c"), "Lund", new DateTime(2025, 5, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ett socialt evenemang för både hund- och kattägare.", "Stadsparken", "16:00", "Hund & Katt-mingel", "blandat" }
                });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "ItemId", "AltImage", "Date", "Description", "Image", "Location", "Title", "Type", "Username" },
                values: new object[,]
                {
                    { new Guid("40552539-8c3e-4eb7-8e15-17be953996ff"), "Hundkoppel", new DateTime(2025, 5, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ett robust reflexkoppel, perfekt för kvällspromenader. Passar medelstora hundar. Använt men i fint skick.", "images/dog-leash.png", "Örebro", "Reflexkoppel till hund", "Skänkes", "Mikael" },
                    { new Guid("b63ebf4c-b7a2-4e9c-852d-990d2bd2edfe"), "Hundbädd", new DateTime(2025, 5, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mjuk och bekväm hundbädd för mindre hundar. Vår valp växte ur den efter bara några veckor.", "images/dog-bed.png", "Linköping", "Hundbädd, knappt använd", "Skänkes", "Jonas" },
                    { new Guid("e7d93e80-cd92-4abd-91cb-3e075e24310a"), "Kattbur", new DateTime(2025, 5, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Plastbur med metallgaller, godkänd för biltransport. Lätt att rengöra. Hämtas i Sundsvall.", "images/cat-carrier.png", "Sundsvall", "Transportbur för katt", "Skänkes", "Elin" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Password", "Username" },
                values: new object[,]
                {
                    { new Guid("10eaec2a-ec38-42e2-9a3a-1e8b4559bb52"), "test3@test.se", "test3", "test3" },
                    { new Guid("4868b4e0-6a24-4c70-ae51-c711f9c1e07d"), "test5@test.se", "test5", "test5" },
                    { new Guid("85c925bd-6f71-4849-82a9-021ba0d76416"), "test4@test.se", "test4", "test4" },
                    { new Guid("a4466a9b-08e1-4e0f-a96d-bfb636632297"), "test2@test.se", "test2", "test2" },
                    { new Guid("c98635e1-fd94-41b0-a0ea-71f09669e7f6"), "test1@test.se", "test1", "test1" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("2b979c9a-4a60-45a8-9534-ad6f01c2312b"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("53eeb5d2-d197-42fe-b3b9-1e62cf4342b5"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("6d33fbf3-0627-4d2f-b383-dd6f03f6b480"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("ac06e62e-808d-49f4-b655-69bc13ac6b8f"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("c3757654-8450-4352-886d-3690c1bc243c"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("10eaec2a-ec38-42e2-9a3a-1e8b4559bb52"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("4868b4e0-6a24-4c70-ae51-c711f9c1e07d"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("85c925bd-6f71-4849-82a9-021ba0d76416"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("a4466a9b-08e1-4e0f-a96d-bfb636632297"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: new Guid("c98635e1-fd94-41b0-a0ea-71f09669e7f6"));

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
    }
}
