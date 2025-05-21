import { useContext, useEffect, useState } from "react";
import FormInput from "../components/Form/FormInput.tsx";
import Button from "../components/Button/Button.tsx";
import Map from "../components/Map/Map.tsx";
import "leaflet/dist/leaflet.css";
import { MapContext } from "../context/MapContext.tsx";

const InteractiveMap = () => {
    const {
        activeCategories,
        setActiveCategories,
        favorites,
        searchLocation,
        setSearchLocation,
    } = useContext(MapContext);

    const [searchInput, setSearchInput] = useState("");

    const handleCategoryToggle = (category: string) => {
        setActiveCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearchLocation(searchInput);
        }, 500);

        return () => clearTimeout(debounce);
    }, [searchInput]);

    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col pt-8 bg-buff-900 border-2 rounded-xl mt-8 mb-4 mx-4 gap-4">
                <div className="px-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">
                            Interaktiv karta
                        </h1>
                        <p className="text-lg">
                            Upptäck djurvänliga platser nära dig - från
                            veterinärer och hundrastgårdar till kaféer där din
                            pälskling är välkommen.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 mb-2">
                        <div className="mb-4">
                            <FormInput
                                placeholder="Sök i ett annat område"
                                type="search"
                                name="search"
                                onChange={(e) => setSearchInput(e.target.value)}
                                value={searchInput}
                                className="mt-4"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 mb-2">
                            {[
                                "veterinär",
                                "djurhem",
                                "hundrastgård",
                                "kafé",
                                "djurbutik",
                            ].map((cat) => (
                                <Button
                                    key={cat}
                                    design={
                                        activeCategories.includes(cat)
                                            ? "outline"
                                            : "outline"
                                    }
                                    className={
                                        activeCategories.includes(cat)
                                            ? "bg-yellow_green-900 hover:bg-yellow_green-800"
                                            : ""
                                    }
                                    onClick={() => handleCategoryToggle(cat)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-b-2 bg-steel_blue-800 border-black relative h-[350px]">
                    <Map />
                </div>

                <div className="flex flex-col py-6 px-6 border-t-2 bg-steel_blue-900 border-black mt-4 gap-2 rounded-b-xl">
                    <h2 className="text-2xl font-bold mb-4">Favoritplatser</h2>
                    {favorites.length === 0 && <p>Inga favoriter ännu.</p>}
                    <ul className="flex flex-col gap-2">
                        {favorites.map((fav) => (
                            <li
                                key={fav.id}
                                className="border-b-2 border-black mb-2 pb-2"
                            >
                                {fav.name} <br />
                                {fav.phone}
                            </li>
                        ))}
                    </ul>
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
                        placeholder="Platsens namn"
                    />
                    <FormInput
                        type="text"
                        name="address"
                        onChange={() => console.log("address")}
                        value=""
                        placeholder="Adress"
                    />
                    <textarea
                        className="border-2 border-black rounded-lg p-2 text-lg"
                        name="description"
                        onChange={() => console.log("description")}
                        value=""
                        placeholder="Beskrivning"
                        rows={4}
                    />
                    <Button
                        design="outline"
                        className="bg-yellow_green-900 hover:bg-yellow_green-800"
                    >
                        Skicka in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
