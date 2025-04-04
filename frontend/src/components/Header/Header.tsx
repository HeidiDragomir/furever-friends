import { NavLink } from "react-router";
const Header = () => {
  return (
    <nav>
      <NavLink
        to="/business-plan"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Affärsplan
      </NavLink>
      
      <NavLink
        to="/project-idea"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Projektidé
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Kontakta oss
      </NavLink>

    </nav>
  )
}

export default Header