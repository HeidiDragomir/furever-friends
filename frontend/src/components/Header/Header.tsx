import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../../context/UserContext.tsx";

const Header = () => {
    const { token, logout } = useContext(UserContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationLinks = [
        { to: "/", label: "Hem" },
        { to: "/interactive-map", label: "Interaktiv karta" },
        { to: "/events", label: "Evenemang" },
        { to: "/marketplace", label: "Marknadsplats" },
        { to: "/adoption-foster", label: "Adoption" },
        { to: "/volunteer", label: "Volontärarbete" },
        { to: "/forum", label: "Forum" },
        { to: "/contact", label: "Kontakta oss" },
    ];

    return (
        <header className="bg-maize-900 sticky top-0 z-99 flex justify-between text-secondary_text border-b-2 border-aquamarine-300 py-2 px-2 ">
            {/* Desktop version */}
            <div className="hidden xl:flex justify-around items-center w-full">
                <NavLink to="/" className="">
                    <img
                        src="images/logo.png"
                        alt="FurEver Friends logo"
                        className="w-40 h-19 cursor-pointer"
                    />
                </NavLink>
                <ul className="hidden xl:flex justify-center items-center gap-12 text-xl">
                    {navigationLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative transition-all duration-300 ease-in-out hover:text-aquamarine-400 hover:scale-105 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-aquamarine-400 hover:after:w-full after:transition-all after:duration-300 ${
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center mx-2 gap-1">
                    {token ? (
                        <img
                            src="images/logout.png"
                            alt="Logout"
                            className="w-10 h-10 hover:scale-105 transition-transform duration-300"
                            onClick={logout}
                        />
                    ) : (
                        <NavLink to="/login" className="cursor-pointer">
                            <img
                                src="images/login.png"
                                alt="Login"
                                className="w-10 h-10 hover:scale-105 transition-transform duration-300"
                            />
                        </NavLink>
                    )}
                </div>
            </div>

            {/* Mobile version */}
            <div className="xl:hidden flex items-center justify-between w-full">
                <div className="flex items-center mx-2 gap-1">
                    <button
                        className="w-10 h-10 cursor-pointer focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {!menuOpen ? (
                            <img
                                src="svg/menu.svg"
                                alt="Menu icon"
                                className="transition-transform duration-300"
                            />
                        ) : (
                            <img
                                src="images/menu-close.png"
                                alt="Close menu"
                                className="transition-transform duration-300 transform rotate-90"
                            />
                        )}
                    </button>

                    <div
                        className={`absolute top-full w-full left-0 w-64 bg-maize-900 text-main_text rounded-b-2xl shadow-lg border-2 border-aquamarine-300 
                        transition-all duration-300 ease-in-out overflow-hidden ${
                            menuOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0 invisible"
                        }`}
                        style={{ transformOrigin: "top left" }}
                    >
                        <nav className="p-4">
                            <ul className="space-y-3">
                                {navigationLinks.map((link) => (
                                    <li key={link.to}>
                                        <NavLink
                                            to={link.to}
                                            className={({ isActive }) =>
                                                `relative transition-all duration-300 ease-in-out hover:text-aquamarine-400 hover:scale-105 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-aquamarine-400 hover:after:w-full after:transition-all after:duration-300 ${
                                                    isActive
                                                        ? "text-gray-400"
                                                        : "text-main_text"
                                                }`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <NavLink to="/" className="">
                    <img
                        src="images/logo.png"
                        alt="FurEver Friends logo"
                        className="w-40 h-19 cursor-pointer"
                    />
                </NavLink>
                <div className="flex items-center mx-2 gap-1">
                    {token ? (
                        <img
                            src="images/logout.png"
                            alt="Logout"
                            className="w-10 h-10"
                            onClick={logout}
                        />
                    ) : (
                        <NavLink to="/login" className="cursor-pointer">
                            <img
                                src="images/login.png"
                                alt="Login"
                                className="w-10 h-10"
                            />
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
