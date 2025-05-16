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
        <header className=" bg-maize-900 sticky top-0 z-99 flex justify-between text-secondary_text border-b-2 border-aquamarine-300 py-2 px-2 ">
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
                {!menuOpen ? (
                    <button
                        className="w-10 h-10 cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Menu"
                    >
                        <img src="svg/menu.svg" alt="Menu icon" />
                    </button>
                ) : (
                    <div>
                        <button
                            className="w-10 h-10 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Menu"
                        >
                            <img src="images/menu-close.png" alt="Menu icon" />
                        </button>
                        <nav className="flex flex-col z-9999 bg-secondary_background text-base/10 text-main_text absolute top-26 right-2 w-[calc(100%-2rem)] mx-2 p-4 rounded-2xl shadow-lg justify-start border-2 border-aquamarine-300">
                            <ul className="">
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
                )}
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
