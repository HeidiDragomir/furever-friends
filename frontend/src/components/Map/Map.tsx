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

export const LocationMarker = () => {
    const currentLocation = useGeolocation();
    const map = useMap();
    const [position, setPosition] = useState(currentLocation);

    console.log("Current location:", currentLocation);

    useEffect(() => {
        if (currentLocation) {
            setPosition(currentLocation);
            map.flyTo(
                [currentLocation.latitude, currentLocation.longitude],
                map.getZoom()
                // { animate: true }
            );
            map.setView([currentLocation.latitude, currentLocation.longitude]);
        }
    }, [currentLocation, map]);

    return position === null ? null : (
        <>
            <Marker position={[position.latitude, position.longitude]}>
                <Popup>You are here</Popup>
            </Marker>
            <Circle
                center={[position.latitude, position.longitude]}
                radius={position.accuracy}
            ></Circle>
        </>
    );
};
const Map = () => {
    return (
        <div id="map">
            <MapContainer center={[0, 0]} zoom={19} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker />
            </MapContainer>
        </div>
    );
};

export default Map;
