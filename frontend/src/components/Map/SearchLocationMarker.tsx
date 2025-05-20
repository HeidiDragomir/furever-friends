import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

interface Props {
    searchLocation: string;
}

const SearchLocationMarker = ({ searchLocation }: Props) => {
    const map = useMap();
    const [coords, setCoords] = useState<[number, number] | null>(null);

    useEffect(() => {
        const fetchCoords = async () => {
            if (!searchLocation) return;

            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                        searchLocation
                    )}`
                );
                const data = await response.json();

                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    const newCoords: [number, number] = [
                        parseFloat(lat),
                        parseFloat(lon),
                    ];
                    setCoords(newCoords);
                    map.flyTo(newCoords, 10);
                }
            } catch (error) {
                console.error("Geocoding error:", error);
            }
        };

        fetchCoords();
    }, [searchLocation, map]);

    return null;
};

export default SearchLocationMarker;
