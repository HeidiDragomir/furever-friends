import { NavLink } from "react-router";
const Header = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md flex justify-center items-center h-[100px]">
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
    </nav>
  )
}

export default Header