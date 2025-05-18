import { useState } from "react";
import Button from "../components/Button/Button.tsx";
import CardPet from "../components/Card/CardPet.tsx";

const AdoptionFoster = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (tab: number) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col min-h-screen gap-8 items-center">
            <div className="flex flex-col items-center text-center py-8 px-6 bg-brilliant_rose-900 border-2 rounded-xl mt-8 mx-4 gap-4">
                <h2 className="text-xl font-semibold mb-2">
                    Ge en tass en chans - adoptera eller bli fosterhem
                </h2>
                <p className="mb-4 text-md">
                    Hitta din framtida pälsvän eller erbjud ett kärleksfullt hem
                    - tillsammans skapar vi en tryggare framtid för våra
                    fyrbenta vänner.
                </p>
                <div className="flex gap-2 justify-around">
                    <Button
                        design="outline-small"
                        className="text-sm bg-brilliant_rose-500 hover:bg-yellow_green-600"
                    >
                        Se djur
                        <br /> som söker hem
                    </Button>
                    <Button design="outline-small" className="text-sm">
                        Bli fosterhem
                    </Button>
                </div>
            </div>
            <div className="border-t-2 w-full bg-yinmn_blue-900">
                <div className="border-b-2 py-2">
                    <ul className="flex gap-4 justify-around w-3/4 mx-auto">
                        <li
                            className={`cursor-pointer p-2 rounded-xl ${
                                activeTab === 1
                                    ? "bg-white shadow-md scale-100"
                                    : ""
                            }`}
                            onClick={() => handleClick(1)}
                        >
                            <img
                                src="images/pets.png"
                                alt=""
                                className="w-10 h-10 "
                            />
                        </li>
                        <li
                            className={`cursor-pointer p-2 rounded-xl ${
                                activeTab === 2
                                    ? "bg-white shadow-md scale-100"
                                    : ""
                            }`}
                            onClick={() => handleClick(2)}
                        >
                            <img
                                src="images/shelter.png"
                                alt=""
                                className="w-10 h-10"
                            />
                        </li>
                        <li
                            className={`cursor-pointer p-2 rounded-xl ${
                                activeTab === 3
                                    ? "bg-white shadow-md scale-100"
                                    : ""
                            }`}
                            onClick={() => handleClick(3)}
                        >
                            <img
                                src="images/notes.png"
                                alt=""
                                className="w-10 h-10"
                            />
                        </li>
                    </ul>
                </div>
                {activeTab === 1 && (
                    <div className="py-2 ">
                        <CardPet image="images/garfield.png" />
                        <CardPet image="images/snow.jpg" />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="py-6 px-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">
                                Vad innebär att vara fosterhem
                            </h2>
                            <p className="text-lg">
                                Låna en lurvig vän ett tag - ge trygghet, mys
                                och ny chans till ett nytt hem!
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Du behöver:
                            </h3>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p className="text-lg">
                                    Ett tryggt och kärleksfullt hem
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p className="text-lg">Tid och tålamod</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p className="text-lg">
                                    Massor av gos och omtanke
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p className="text-lg tracking-tighter">
                                    Vilja att hjälpa ett djur hitta sitt hem
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Du får hjälp med:
                            </h3>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p>Foder & tillbehör</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p>Veterinärvård</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p>Support & vägledning</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/checked-checkbox.png"
                                    alt="Checked checkbox"
                                    className="w-8"
                                />
                                <p>Matchning med rätt djur</p>
                            </div>
                        </div>
                        <div className="flex justify-center my-4">
                            <Button
                                design="outline"
                                className="bg-yellow_green-800 hover:bg-yellow_green-700"
                                onClick={() => console.log("Contact user")}
                            >
                                Anmäl intresse som fosterhem
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="py-6 px-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">
                                Adoptionsprocessen
                            </h2>
                            <p className="text-lg">
                                Låna en lurvig vän ett tag - ge trygghet, mys
                                och ny chans till ett nytt hem!
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Steg-för-steg guide:
                            </h3>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/no-1.png"
                                    alt="Numbers"
                                    className="w-8"
                                />
                                <p className="text-lg">Hitta ett djur</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/no-2.png"
                                    alt="Numbers"
                                    className="w-8"
                                />
                                <p className="text-lg">Skicka förfrågan</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/no-3.png"
                                    alt="Numbers"
                                    className="w-8"
                                />
                                <p className="text-lg">Träffa djuret</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/no-4.png"
                                    alt="Numbers"
                                    className="w-8"
                                />
                                <p className="text-lg tracking-tighter">
                                    Hemkontroll
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img
                                    src="images/no-5.png"
                                    alt="Numbers"
                                    className="w-8"
                                />
                                <p className="text-lg tracking-tighter">
                                    Adoption/fosterhem påbörjas
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center my-4">
                            <Button
                                design="outline"
                                className="bg-yellow_green-800 hover:bg-yellow_green-700"
                                onClick={() => console.log("Contact user")}
                            >
                                Jag vill adoptera
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdoptionFoster;
