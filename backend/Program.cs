using backend.Domain.Repositories;
using backend.Domain.Services;
using backend.Mapping;
using backend.Persistence.Context;
using backend.Persistence.Repositories;
using backend.Services;
using backend.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySql(builder.Configuration.GetConnectionString("AppDbContextConnection"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("AppDbContextConnection")));
});

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddScoped<IEventRepository, EventRepository>();
builder.Services.AddScoped<IEventService, EventService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
        //.AllowCredentials();
    });
});

builder.Services.AddAutoMapper(typeof(AuthProfile));

builder.Services.AddSingleton<JwtTokenManager>();

builder.Services.AddAuthentication(option =>
{
    option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;  // Sets JWT as the default authentication scheme
    option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;     // Defines JWT as the default challenge scheme
})
.AddJwtBearer(jwtOption =>  // Configures JWT authentication
{
    var key = builder.Configuration.GetValue<string>("Jwt:Key");
    var issuer = builder.Configuration.GetValue<string>("Jwt:Issuer");
    var audience = builder.Configuration.GetValue<string>("Jwt:Audience");
    var keyBytes = Encoding.ASCII.GetBytes(key);
    jwtOption.SaveToken = true;     // Ensures the token is stored when authentication succeeds

    jwtOption.TokenValidationParameters = new TokenValidationParameters     // Defines token validation rules
    {
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes),      // Uses the secret key for validating the token signature
        ValidateLifetime = true,    // Ensures the token hasn't expired
        ValidateAudience = true,    // Checks if the token's audience matches the expected audience
        ValidAudience = audience,   // Sets the valid audience from configuration
        ValidateIssuer = true,      // Ensures the token's issuer is valid
        ValidIssuer = issuer        // Sets the valid issuer from configuration
    };
});

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
