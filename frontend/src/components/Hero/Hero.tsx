import { useState } from "react";
import Button from "../Button/Button.tsx";

const Hero = () => {
    const [isMember, setIsMember] = useState(false);
    return (
        <div className="relative mt-30 mb-8 mx-4 sm:flex sm:flex-col sm:items-center sm:gap-8">
            {/* Hero image for mobile */}
            <div className="flex justify-center absolute -top-20 left-0 right-0 sm:hidden">
                <img
                    src="images/hero.png"
                    alt="Hund och katt"
                    className="rounded-xl"
                />
            </div>
            <div className="pt-20 pb-8 sm:py-20 px-6 sm:px-15 bg-light_coral-800 border-2 rounded-xl flex flex-col sm:flex-row gap-4 items-center sm:gap-8 sm:mx-10">
                <div className="justify-center hidden sm:flex sm:items-center">
                    <img
                        src="images/hero.png"
                        alt="Hund och katt"
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col items-center sm:items-start sm:gap-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-20 sm:my-0">
                        FurEver Friends
                    </h1>
                    <p className="text-xl sm:text-2xl text-center sm:text-start mb-4">
                        Din digitala mötesplats för allt som rör ditt husdjur!
                    </p>

                    <p className="text-md sm:text-2xl mb-6 text-center sm:text-start">
                        Oavsett om du är en hängiven hundmänniska eller en stolt
                        kattälskare så har vi något för dig. Gå med i vår
                        gemenskap idag och upptäck fördelarna med att vara en
                        del av FurEver Friends!
                    </p>
                    <Button
                        design="outline"
                        className="bg-yellow_green-600 text-main_text hover:bg-yellow_green-500"
                        onClick={() => {
                            window.location.href = "/signup";
                        }}
                    >
                        Kom igång nu!
                    </Button>
                </div>
            </div>

            {/* Premium medlemskap */}
            <div className="mt-20 sm:my-20 px-6 sm:px-20 sm:py-20 py-8 bg-yellow-100 border-2 border-yellow-300 rounded-xl flex flex-col items-center sm:items-start gap-6 sm:gap-8 shadow">
                {isMember ? (
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src="/images/party.png"
                            alt="Party popper"
                            className="w-10 h-10"
                        />
                        <p className="font-semibold text-lg text-center">
                            Du är nu medlem! <br /> Tack för ditt stöd.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl sm:w-full sm:flex sm:justify-center sm:text-4xl font-bold text-yellow-800 mb-4">
                            Bli FurEver-medlem
                        </h2>
                        <p className="text-center text-lg max-w-xl sm:max-w-max sm:text-2xl sm:text-left">
                            För endast{" "}
                            <span className="font-bold">50 kr/mån</span> får du
                            tillgång till exklusiva förmåner:
                        </p>

                        <div className="flex flex-col gap-2 sm:gap-4 text-md text-gray-800 sm:text-2xl sm:mb-8">
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Skapa en personlig profil för ditt husdjur
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Matchningssystem för att hitta nya vänner till
                                ditt djur
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Rabatter hos samarbetspartners
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Spara obegränsat med favoriter
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Prioriterad kundsupport
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Tillgång till expertrådgivning
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Skapa egna platser på kartan
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Tidigare tillgång till nya funktioner
                            </div>
                            <div className="flex items-start sm:items-center gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                                Premiummärke i din profil
                            </div>
                        </div>

                        <div className="sm:w-full sm:flex sm:justify-center">
                            <Button
                                design="outline"
                                className="bg-yellow_green-800 hover:bg-yellow_green-700"
                                onClick={() => setIsMember(true)}
                            >
                                Bli medlem för 50 kr/mån
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hero;
