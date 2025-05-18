import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

type HeaderProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isLoggedIn, setIsLoggedIn }: HeaderProps) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("User");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header className="bg-maize-900 sticky top-0 z-99 flex justify-between text-secondary_text border-b-2 border-aquamarine-300 py-2 px-2 ">
            {/* <ul className="flex justify-center items-center gap-12 text-xl">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-gray-400" : "text-white"
                        }
                    >
                        Hem
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/business-plan"
                        className={({ isActive }) =>
                            isActive ? "text-gray-400" : "text-white"
                        }
                    >
                        Affärsplan
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/project-idea"
                        className={({ isActive }) =>
                            isActive ? "text-gray-400" : "text-white"
                        }
                    >
                        Projektidé
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-gray-400" : "text-white"
                        }
                    >
                        Kontakta oss
                    </NavLink>
                </li>
            </ul>

            <ul className="flex justify-center items-center gap-12 text-xl">
                {!isLoggedIn ? (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "text-gray-400" : "text-white"
                                }
                            >
                                Logga in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive ? "text-gray-400" : "text-white"
                                }
                            >
                                Registrera
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <li>
                        <button
                            onClick={handleLogout}
                            className="text-white cursor-pointer"
                        >
                            Logga ut
                        </button>
                    </li>
                )}
            </ul> */}

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
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Hem
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/interactive-map"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Interaktiv karta
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Kalender &amp; Evenemang
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/marketplace"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Marknadsplats
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/adoption-foster"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Adoption &amp; Fosterhem
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/volunteer"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Volontärarbete
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/forum"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Community/Forum
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-400"
                                            : "text-main_text"
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Kontakta oss
                                </NavLink>
                            </li>
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
                <NavLink to="/login" className="cursor-pointer">
                    <img
                        src="images/login.png"
                        alt="Login"
                        className="w-10 h-10"
                    />
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
