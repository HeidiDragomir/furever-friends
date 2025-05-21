import { NavLink } from "react-router";
import Button from "../Button/Button.tsx";

const Footer = () => {
    return (
        <footer className="bg-amethyst-900 py-12 px-4 z-1 mt-4 border-t-2 border-amethyst-300">
            <div className="bg-amethyst-800 p-4 flex flex-col justify-center items-center border-2 rounded-xl">
                <NavLink to="/" className="mb-8">
                    <img
                        src="images/logo.png"
                        alt="FurEver Friends logo"
                        className="w-40 h-19 cursor-pointer"
                    />
                </NavLink>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="flex flex-col items-center">
                            <p>FurEver Friends</p>
                            <p>Innovationsgatan 5</p>
                            <p>123 45 Djurstad</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>kontakt@fureverfriends.se</p>
                            <p>020 - 123 456</p>
                        </div>
                        <ul className="flex gap-4">
                            <li>
                                <a href="/">
                                    <img
                                        src="svg/facebook.svg"
                                        alt="Facebook"
                                        className="w-6 h-6 cursor-pointer"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="svg/instagram.svg"
                                        alt="Instagram"
                                        className="w-6 h-6 cursor-pointer"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="svg/tiktok.svg"
                                        alt="TikTok"
                                        className="w-6 h-6 cursor-pointer"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="svg/youtube.svg"
                                        alt="YouTube"
                                        className="w-6 h-6 cursor-pointer"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-secondary_background p-6 rounded-xl max-w-md mx-auto text-center border-2 rounded-xl">
                        <h4 className="text-lg font-semibold mb-1">
                            Anmäl dig till vårt nyhetsbrev
                        </h4>
                        <p className="text-sm text-main_text mb-4">
                            Få tips, evenemang och nyheter direkt till din
                            inkorg.
                        </p>
                        <form className="flex flex-col sm:flex-row items-center gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Din e-postadress"
                                required
                                className="w-full px-4 py-2 rounded-md border border-main_text text-main_text focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <Button
                                type="submit"
                                design="outline"
                                className="bg-yellow_green-800 mt-4"
                            >
                                Prenumerera
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="uppercase font-semibold mb-2">Info</h3>
                        <ul className="flex flex-col justify-center items-center gap-2">
                            <li>
                                <NavLink to="/" className="italic">
                                    Bli medlem
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/business-plan" className="italic">
                                    Press
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project-idea" className="italic">
                                    Affiliate-program
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/" className="italic">
                                    Vanliga frågor
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="italic">
                                    Nyhetsbrev
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="italic">
                                    Om oss
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="italic">
                                    Kontakta oss
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="uppercase font-semibold mb-2">
                            Juridisk information
                        </h3>
                        <ul className="flex flex-col justify-center items-center gap-2">
                            <li>
                                <NavLink to="/" className="italic">
                                    Användarvillkor
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/business-plan" className="italic">
                                    Sekretesspolicy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project-idea" className="italic">
                                    Cookie-inställningar
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <p className="text-center py-5">
                        &copy; 2025 FurEver Friends
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
