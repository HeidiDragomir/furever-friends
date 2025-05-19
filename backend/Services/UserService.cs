using AutoMapper;
using backend.Domain.Models.User;
using backend.Domain.Models.UserRegister;
using backend.Domain.Repositories;
using backend.Domain.Services;
using backend.Domain.DTOs.Auth;
using backend.Utils;
using Microsoft.AspNetCore.Identity;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly JwtTokenManager _jwtTokenManager;

        public UserService(IUserRepository userRepository, IMapper mapper, JwtTokenManager jwtTokenManager)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _jwtTokenManager = jwtTokenManager;
        }

        // ------ REGISTER ------ //
        public async Task<UserRegisterResDTO> Register(UserRegisterReqDTO model)
        {
            // Check if the user already exists
            var existingUsername = await _userRepository.FindUserByName(model.Username);
            var existingEmail = await _userRepository.FindUserByEmail(model.Email);

            if (existingUsername != null)
            {
                throw new Exception($"Username {model.Username} is already taken.");
            }

            if (existingEmail != null)
            {
                throw new Exception($"Email {model.Email} is already taken.");
            }

            // UserRegisterReqDTO -> UserRegister
            var user = _mapper.Map<UserRegister>(model);

            // Set the UserId
            user.UserId = Guid.NewGuid();

            // Map to User before hashing
            var newUser = _mapper.Map<User>(user);

            // Hash password
            var passwordGenerator = new PasswordHasher<User>();
            newUser.Password = passwordGenerator.HashPassword(newUser, model.Password);


            // Save the user in the database
            var createdUser = await _userRepository.CreateUser(newUser);

            // User --> UserRegisterResDTO
            return _mapper.Map<UserRegisterResDTO>(createdUser);
        }


        // ------ LOGIN ------ //
        public async Task<object> Login(UserAuthReqDTO model)
        {

            // Find user by username
            var userToLogin = await _userRepository.FindUserByEmail(model.Email);

            if (userToLogin == null)
            {
                Console.WriteLine("No user found with that email.");
                throw new Exception("User not found.");
            }

            // Verify password
            var passwordGenerator = new PasswordHasher<User>();
            var result = passwordGenerator.VerifyHashedPassword(userToLogin, userToLogin.Password, model.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                throw new Exception("Fel användarnam eller lösenord.");
            }


            // Generate token
            var token = _jwtTokenManager.GenerateToken(userToLogin.Username, userToLogin.UserId);


            // userToLogin (User) --> UserAuthResDTO
            var userResponse = _mapper.Map<UserAuthResDTO>(userToLogin);

           
            userResponse.Token = token;

            return userResponse;
        }
    }
}
