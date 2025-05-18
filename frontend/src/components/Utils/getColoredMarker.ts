import L from "leaflet";

export function getColoredMarker(color: string) {
    return L.icon({
        iconUrl: `/images/marker-icon-${color}.png`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
    });
}
