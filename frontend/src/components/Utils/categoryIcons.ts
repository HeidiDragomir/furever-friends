import { Icon } from "leaflet";
export const categoryIcons: Record<string, Icon> = {
    veterinär: new Icon({
        iconUrl: "/images/veterinary.png",
        iconSize: [20, 20],
        iconAnchor: [12, 41],
    }),
    djurhem: new Icon({
        iconUrl: "/images/shelter.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    }),
    hundrastgård: new Icon({
        iconUrl: "/images/dog-park.png",
        iconSize: [20, 20],
        iconAnchor: [12, 41],
    }),
    kafé: new Icon({
        iconUrl: "/images/cafe.png",
        iconSize: [20, 20],
        iconAnchor: [12, 41],
    }),
    djurbutik: new Icon({
        iconUrl: "/images/pet-store.png",
        iconSize: [20, 20],
        iconAnchor: [12, 41],
    }),
};

export const categoryColors: Record<string, string> = {
    veterinär: "red",
    djurhem: "green",
    hundrastgård: "orange",
    kafé: "grey",
    djurbutik: "violet",
};
