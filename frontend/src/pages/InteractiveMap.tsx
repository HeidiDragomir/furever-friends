import { useState } from "react";
import FormCheckbox from "../components/Form/FormCheckbox.tsx";
import FormInput from "../components/Form/FormInput.tsx";
import Button from "../components/Button/Button.tsx";
import Map from "../components/Map/Map.tsx";
import "leaflet/dist/leaflet.css";

const InteractiveMap = () => {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <div>Loading map...</div>;
    }
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col py-8 border-2 rounded-xl mt-8 mb-4 mx-4 gap-4">
                <div className="px-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">
                            Interactive Map
                        </h1>
                        <p className="text-lg">
                            Upptäck djurvänliga platser nära dig - från
                            veterinärer och hundrastgårdar till kaféer där din
                            pälskling är välkommen.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 mb-2">
                        <div className="mb-4">
                            <FormCheckbox label="Sök nära mig" />

                            <FormInput
                                placeholder="Sök i ett annat område"
                                type="search"
                                name="search"
                                onChange={() => console.log("searching")}
                                value=""
                                className="mt-4 "
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 mb-2">
                            <Button
                                design="outline"
                                className="hover:bg-maize-700"
                            >
                                Veterinär
                            </Button>
                            <Button
                                design="outline"
                                className="hover:bg-brilliant_rose-800"
                            >
                                Djurhem
                            </Button>
                            <Button
                                design="outline"
                                className="hover:bg-yellow_green-800"
                            >
                                Hundrastgård
                            </Button>
                            <Button
                                design="outline"
                                className="hover:bg-bittersweet-700"
                            >
                                Kafé
                            </Button>
                            <Button
                                design="outline"
                                className="hover:bg-yinmn_blue-800"
                            >
                                Djurbutik
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Map />
                </div>
            </div>
            <div className="flex flex-col py-8 px-6 border-2 rounded-xl my-4 mx-4 gap-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">Lägg till plats</h1>
                    <p className="text-lg">
                        Har du tips på djurvänliga platser? Hjälp oss att bygga
                        upp kartan genom att fylla i formuläret nedan!
                    </p>
                </div>
                <div className="flex flex-col gap-6 mb-2">
                    <FormInput
                        type="text"
                        name="place-name"
                        onChange={() => console.log("place name")}
                        value=""
                    />
                    <FormInput
                        type="text"
                        name="address"
                        onChange={() => console.log("address")}
                        value=""
                    />
                    <FormInput
                        type="text"
                        name="description"
                        onChange={() => console.log("description")}
                        value=""
                    />
                    <Button
                        design="outline"
                        className="bg-yellow_green-900 hover:bg-yellow_green-800"
                    >
                        Skicka in
                    </Button>
                </div>
            </div>
            <div className="flex flex-col py-8 px-6 border-t-2 border-b-2 bg-steel_blue-800 border-black mt-8 mb-4 gap-4">
                <div className="flex flex-col py-8 px-6 bg-buff-800 border-2 rounded-xl gap-4">
                    <h1 className="text-2xl font-bold mb-4">Mina favoriter</h1>
                    <p className="text-lg">
                        Här kommer kartan att visas. Du kan zooma in och ut,
                        samt klicka på olika platser för mer information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
