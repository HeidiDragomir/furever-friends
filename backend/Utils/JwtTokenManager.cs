
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Utils
{
    public class JwtTokenManager
    {
        // Stores configuration values from appsettings.json (secret key)
        private readonly IConfiguration _configuration;

        // Injects configuration settings via dependency injection
        public JwtTokenManager(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateToken(string name, Guid userId)
        {
            // Retrieves secret key from configuration
            var key = _configuration.GetValue<string>("Jwt:Key");

            // Retrieves token issuer
            var issuer = _configuration.GetValue<string>("Jwt:Issuer");

            // Retrieves intended audience
            var audience = _configuration.GetValue<string>("Jwt:Audience");

            // Converts secret key to byte array for encryption
            var keyBytes = Encoding.UTF8.GetBytes(key);

            // Creates a new JWT token handler
            var tokenHandler = new JwtSecurityTokenHandler();

            // Defines the token properties
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] // Defines user identity claims
                {
                    new Claim(ClaimTypes.Name, name), // Keep name as separate claim if needed
                 }),
                Expires = DateTime.UtcNow.AddHours(1), // Sets token expiration to 1 hour from current time
                Issuer = issuer, // Sets the token issuer
                Audience = audience, // Sets the intended audience
                SigningCredentials = new SigningCredentials(    // Defines how the token is signed
                                     new SymmetricSecurityKey(keyBytes),    // Uses the secret key for signing
                                     SecurityAlgorithms.HmacSha256Signature)    // Uses HMAC SHA-256 encryption
            };

            // Generates the JWT token
            var token = tokenHandler.CreateToken(tokenDescriptor);

            // Converts the token to a string and returns it
            return tokenHandler.WriteToken(token);
        }
    }
}
