import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#f9f6f0] p-6 flex flex-col justify-center items-center z-1 mt-auto border-t border-[#1b1b1b]">
            {/* <div className="flex justify-center items-center gap-24">
        <NavLink to="/" className="hover:underline">Vanliga frågor</NavLink>
        <NavLink to="/contact" className="hover:underline">Kontakt</NavLink>
      </div> */}
            {/* <div>
          <p className="text-center py-5">&copy; 2025 FurEver Friends</p>
      </div> */}
            <NavLink to="/" className="mb-8">
                <img
                    src="images/logo.png"
                    alt="FurEver Friends logo"
                    className="w-40 h-19 cursor-pointer"
                />
            </NavLink>
            <div className="flex flex-col gap-8">
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
                <ul className="flex flex-col justify-center items-center gap-4">
                    <li>
                        <NavLink to="/" className="">
                            Hem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/business-plan" className="">
                            Interaktiv karta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project-idea" className="">
                            Community/Forum
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className="">
                            Kalender &amp; Evenemang
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="">
                            Marknadsplats
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="">
                            Adoption &amp; Fosterhem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="">
                            Kontakta oss
                        </NavLink>
                    </li>
                </ul>
                <p className="text-center py-5">&copy; 2025 FurEver Friends</p>
            </div>
        </footer>
    );
};

export default Footer;
