import { NavLink } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-[#f9f6f0] py-6 px-16 w-full h-[100px] mx-auto flex justify-around items-center border-t border-b border-[#1b1b1b]">
      <div className="flex justify-center items-center gap-24">
        <NavLink to="/" className="hover:underline">Vanliga frågor</NavLink>
        <NavLink to="/contact" className="hover:underline">Kontakt</NavLink>
      </div>
      <div>
          <p className="text-center py-5">&copy; 2025 FurEver Friends</p>
      </div>
    </footer>
  )
}

export default Footer