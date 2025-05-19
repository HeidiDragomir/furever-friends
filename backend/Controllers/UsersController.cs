using backend.Domain.DTOs.Auth;
using backend.Domain.Services;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("/api/users/register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterReqDTO userDto)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Register the user
            var response = await _userService.Register(userDto);

            return Ok(response);

        }

        [HttpPost("/api/users/authenticate")]
        public async Task<IActionResult> Login([FromBody] UserAuthReqDTO userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var responseUser = await _userService.Login(userDto);
                return Ok(responseUser);
            }
            catch (Exception ex2)
            {
                return BadRequest(new { message = "Invalid email or password." });
            }

        }
    }
}
