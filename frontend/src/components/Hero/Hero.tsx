import { useState } from "react";
import Button from "../Button/Button.tsx";

const Hero = () => {
    const [isMember, setIsMember] = useState(false);
    return (
        <div className="relative mt-30 mb-8 mx-4">
            <div className="flex justify-center absolute -top-20 left-0 right-0">
                <img
                    src="images/hero.png"
                    alt="Hund och katt"
                    className="rounded-xl"
                />
            </div>
            <div className="pt-20 pb-8 px-6 bg-amber-200 border-2 rounded-xl flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold mb-4 mt-20">
                    FurEver Friends
                </h1>
                <p className="text-xl text-center mb-4">
                    Din digitala mötesplats för allt som rör ditt husdjur!
                </p>

                <p className="text-md mb-6 text-center">
                    Oavsett om du är en hängiven hundmänniska eller en stolt
                    kattälskare så har vi något för dig. Gå med i vår gemenskap
                    idag och upptäck fördelarna med att vara en del av FurEver
                    Friends!
                </p>
                <Button
                    design="outline"
                    className="bg-yellow_green text-main_text"
                    onClick={() => {
                        window.location.href = "/signup";
                    }}
                >
                    Kom igång nu!
                </Button>
            </div>

            {/* Premium medlemskap */}
            <div className="mt-20 px-6 py-8 bg-yellow-100 border-2 border-yellow-300 rounded-xl flex flex-col items-center gap-6 shadow">
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
                        <h2 className="text-2xl font-bold text-yellow-800 mb-4">
                            Bli FurEver-medlem
                        </h2>
                        <p className="text-center text-lg max-w-xl">
                            För endast{" "}
                            <span className="font-bold">50 kr/mån</span> får du
                            tillgång till exklusiva förmåner:
                        </p>

                        <div className="flex flex-col gap-2 text-md text-gray-800">
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Skapa en personlig profil för ditt husdjur
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Matchningssystem för att hitta nya vänner till
                                ditt djur
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Rabatter hos samarbetspartners
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Spara obegränsat med favoriter
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Prioriterad kundsupport
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Tillgång till expertrådgivning
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Skapa egna platser på kartan
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Tidigare tillgång till nya funktioner
                            </div>
                            <div className="flex items-start gap-2">
                                <img
                                    src="/images/checked-premium.png"
                                    className="w-8 h-8"
                                />
                                Premiummärke i din profil
                            </div>
                        </div>

                        <Button
                            design="outline"
                            className="bg-yellow_green-800 hover:bg-yellow_green-700"
                            onClick={() => setIsMember(true)}
                        >
                            Bli medlem för 50 kr/mån
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hero;
