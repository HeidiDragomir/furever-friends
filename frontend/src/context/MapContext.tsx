import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";
import { Place } from "../lib/fetchPlacesByCategory.ts";

interface MapContextType {
    activeCategories: string[];
    setActiveCategories: Dispatch<SetStateAction<string[]>>;
    favorites: Place[];
    setFavorites: Dispatch<SetStateAction<Place[]>>;
    searchLocation: string;
    setSearchLocation: Dispatch<SetStateAction<string>>;
}

const defaultState: MapContextType = {
    activeCategories: [],
    setActiveCategories: () => {},
    favorites: [],
    setFavorites: () => {},
    searchLocation: "",
    setSearchLocation: () => {},
};

export const MapContext = createContext<MapContextType>(defaultState);

export const MapProvider = ({ children }: { children: ReactNode }) => {
    const [activeCategories, setActiveCategories] = useState<string[]>([
        "veterinär",
    ]);
    const [favorites, setFavorites] = useState<Place[]>([]);
    const [searchLocation, setSearchLocation] = useState<string>("");

    return (
        <MapContext.Provider
            value={{
                activeCategories,
                setActiveCategories,
                favorites,
                setFavorites,
                searchLocation,
                setSearchLocation,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};
