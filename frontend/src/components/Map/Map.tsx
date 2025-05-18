import "./Map.css";

import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    Circle,
} from "react-leaflet";
import useGeolocation from "../../hooks/UseGeolocation.tsx";
import { fetchPlacesByCategory, Place } from "../../lib/fetchPlacesByCategory";
import { categoryColors } from "../utils/categoryIcons.ts";
import { getColoredMarker } from "../utils/getColoredMarker.ts";

export const LocationMarker = () => {
    const currentLocation = useGeolocation();
    const map = useMap();
    const [position, setPosition] = useState(currentLocation);

    // console.log("Current location:", currentLocation);

    useEffect(() => {
        if (currentLocation) {
            setPosition(currentLocation);
            map.flyTo(
                [currentLocation.latitude, currentLocation.longitude],
                map.getZoom()
            );
            map.setView([currentLocation.latitude, currentLocation.longitude]);
        }
    }, [currentLocation, map]);

    return position === null ? null : (
        <>
            <Marker position={[position.latitude, position.longitude]}>
                <Popup>
                    <p>Du är här</p>
                </Popup>
            </Marker>
            <Circle
                center={[position.latitude, position.longitude]}
                radius={position.accuracy}
            ></Circle>
        </>
    );
};

interface MapProps {
    activeCategories: string[];
    favorites: Place[];
    setFavorites: (favs: Place[]) => void;
    searchLocation: string;
    
}

const Map = ({
    activeCategories,
    favorites,
    setFavorites,
    searchLocation,
}: MapProps) => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            let allPlaces: Place[] = [];

            for (const category of activeCategories) {
                const data = await fetchPlacesByCategory(
                    category,
                    searchLocation
                );
                console.log("Fetched for category:", category, data);
                allPlaces = [...allPlaces, ...data];
            }

            setPlaces(allPlaces);
            setLoading(false);
        };

        fetchAll();
    }, [activeCategories, searchLocation]);

    const toggleFavorite = (place: Place) => {
        if (favorites.find((p) => p.id === place.id)) {
            setFavorites(favorites.filter((p) => p.id !== place.id));
        } else {
            setFavorites([...favorites, place]);
        }
    };

    console.log("Places:", places);

    return (
        <div id="map" className="relative">
            {loading && (
                <div className="absolute z-[1000] left-1/2 top-4 bg-white p-2 rounded shadow">
                    Laddar platser...
                </div>
            )}
            <MapContainer center={[0, 0]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        position={[place.lat, place.lon]}
                        icon={getColoredMarker(
                            categoryColors[place.category] || "blue"
                        )}
                    >
                        <Popup>
                            <p className="font-semibold">{place.name}</p>
                            <p>{place.adress}</p>
                            <p>{place.phone}</p>
                            <p>{place.email}</p>
                            <a href={place.website} target="_blank">
                                {place.website}
                            </a>
                            <br />
                            <button
                                onClick={() => toggleFavorite(place)}
                                className="mt-2 text-sm underline italic"
                            >
                                {favorites.find((p) => p.id === place.id) ? (
                                    <div className="flex gap-2">
                                        <p>Ta bort från favoriter</p>
                                        <p>
                                            <img
                                                src="/images/remove.png"
                                                alt="Add"
                                                className="w-5 h-5 inline"
                                            />
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <p>Lägg till i favoriter</p>
                                        <p>
                                            <img
                                                src="/images/add.png"
                                                alt="Add"
                                                className="w-5 h-5 inline"
                                            />
                                        </p>
                                    </div>
                                )}
                            </button>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
