import { NavLink, useNavigate } from "react-router";

type HeaderProps = {
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ isLoggedIn, setIsLoggedIn }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md flex justify-around items-center h-[100px]">
      <ul className="flex justify-center items-center gap-12 text-xl">
      <li><NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-gray-400" : "text-white"
        }
      >
        Hem
        </NavLink></li>
        <li><NavLink
        to="/business-plan"
        className={({ isActive }) =>
          isActive ? "text-gray-400" : "text-white"
        }
      >
        Affärsplan
        </NavLink></li>
          <li><NavLink
        to="/project-idea"
        className={({ isActive }) =>
          isActive ? "text-gray-400" : "text-white"
        }
      >
        Projektidé
        </NavLink></li>
        <li><NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-gray-400" : "text-white"
          }
        >
          Kontakta oss
        </NavLink></li>
      </ul>

      
      <ul className="flex justify-center items-center gap-12 text-xl">

      {!isLoggedIn ? (
        <>
          <li><NavLink
              to="/login"
              className={({ isActive }) => isActive ? "text-gray-400" : "text-white"}
            >
              Logga in
            </NavLink></li><li><NavLink
              to="/signup"
              className={({ isActive }) => isActive ? "text-gray-400" : "text-white"}
            >
              Registrera
            </NavLink></li>
        </>
      ) : (
        <li>
            <button onClick={handleLogout} className="text-white cursor-pointer">Logga ut</button>
        </li>
      )      
      } 
      </ul>
    </nav>
  )
}

export default Header