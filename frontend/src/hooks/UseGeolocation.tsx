import { useEffect, useState } from "react";

export default function useGeolocation() {
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
        accuracy: 0,
    });

    useEffect(() => {
        const location = navigator.geolocation;

        function onSuccess(position: GeolocationPosition) {
            setPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
            });
        }

        function onError(error: GeolocationPositionError) {
            console.error("Error retrieving geolocation:", error);
        }

        const watcher = location.watchPosition(onSuccess, onError);

        return () => location.clearWatch(watcher);
    }, []);

    return position;
}
