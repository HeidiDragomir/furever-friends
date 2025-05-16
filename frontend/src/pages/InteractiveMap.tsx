import { useEffect, useState } from "react";
import FormCheckbox from "../components/Form/FormCheckbox.tsx";
import FormInput from "../components/Form/FormInput.tsx";
import Button from "../components/Button/Button.tsx";

const InteractiveMap = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMap = async () => {
            setLoading(true);
            try {
                // const { Map } = await import("react-map-gl");
                // Initialize the map here
                // Example: new Map({ ... });
            } catch (error) {
                console.error("Error loading map:", error);
            } finally {
                setLoading(false);
                window.scrollTo(0, 0);
            }
        };

        loadMap();
    }, []);

    if (loading) {
        return <div>Loading map...</div>;
    }
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col py-8 px-6 bg-buff-800 border-2 rounded-xl mt-8 mb-4 mx-4 gap-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">Interactive Map</h1>
                    <p className="text-lg">
                        Upptäck djurvänliga platser nära dig - från veterinärer
                        och hundrastgårdar till kaféer där din pälskling är
                        välkommen.
                    </p>
                </div>
                <div className="flex flex-col gap-6 mb-2">
                    <div className="mb-4">
                        <FormCheckbox label="Sök nära mig" />
                        {/* <input
                        type="search"
                        placeholder="Sök"
                        className="w-full p-4 pl-10 border-2 border-gray-darker bg-white-translucent rounded-lg focus:outline-none focus:border-2"
                    /> */}
                        <FormInput
                            placeholder="Sök i ett annat område"
                            type="search"
                            name="search"
                            onChange={() => console.log("searching")}
                            value=""
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-2">
                        <Button design="outline" className="hover:bg-maize-700">
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
                <div className="w-full border-2 rounded-lg">
                    <img src="images/i-map.png" alt="" />
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
                        label="Platsnamn"
                        type="text"
                        name="place-name"
                        onChange={() => console.log("place name")}
                        value=""
                    />
                    <FormInput
                        label="Adress"
                        type="text"
                        name="address"
                        onChange={() => console.log("address")}
                        value=""
                    />
                    <FormInput
                        label="Beskrivning"
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
