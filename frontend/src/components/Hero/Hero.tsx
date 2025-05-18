import Button from "../Button/Button.tsx";

const Hero = () => {
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
                <h1 className="text-4xl font-bold mb-4 mt-20">FurEver Friends</h1>
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
                >
                    Kom igång nu!
                </Button>
            </div>
        </div>
    );
};

export default Hero;
