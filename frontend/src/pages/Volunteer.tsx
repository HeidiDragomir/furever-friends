import Button from "../components/Button/Button.tsx";

const Volunteer = () => {
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col items-center text-center py-8 px-6 bg-yellow_green-900 border-2 rounded-xl mt-8 mx-4 gap-4">
                <h2 className="text-xl font-semibold mb-2">
                    Bli volontär - gör skillnad med din tid
                </h2>
                <p className="mb-4 text-lg">
                    Har du några timmar över i veckan? Hjälp till med
                    promenader, kel, transporter eller evenemang - <br />
                    varje insats räknas!
                </p>
                <Button design="outline" className="bg-yellow_green-500">
                    Bli volontär
                </Button>
            </div>

            <div className="flex flex-col mx-4 mb-8 py-8 px-6 bg-deep_sky_blue-900 border-2 rounded-xl gap-6">
                <h3 className="text-lg font-semibold">Möjliga roller:</h3>
                <ul className="flex flex-col gap-4">
                    <li>
                        <div className="flex items-center gap-2">
                            <img
                                src="images/dog-walking.png"
                                alt="Dog walking"
                                className="w-8"
                            />
                            <p className="text-lg">Promenadkompis</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-2">
                            <img
                                src="images/cleaning.png"
                                alt="Cleaning"
                                className="w-8"
                            />
                            <p className="text-lg">Städare/hjälpreda</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-2">
                            <img
                                src="images/photo.png"
                                alt="Photo"
                                className="w-8"
                            />
                            <p className="text-lg">Fotohjälp till annonser</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-2">
                            <img
                                src="images/car.png"
                                alt="Car"
                                className="w-8"
                            />
                            <p className="text-lg">Transport av djur</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-2">
                            <img
                                src="images/telt.png"
                                alt="Telt"
                                className="w-8"
                            />
                            <p className="text-lg">Hjälp vid evenemang</p>
                        </div>
                    </li>
                </ul>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <Button design="outline" className="bg-deep_sky_blue-500">
                        Bli volontär
                    </Button>
                    <Button design="outline">Se uppdrag nära dig</Button>
                    <Button design="outline">Läs mer om att hjälpa till</Button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
