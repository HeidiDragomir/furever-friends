import { ApiResult } from "../types/ApiResult.ts";

export interface Event {
    id?: number;
    date: string; // "yyyy-MM-dd"
    title: string;
    description: string;
    time: string;
    location: string;
    city: string;
    type: string;
}

export const fetchEventsByDate = async (
    date: string
): Promise<ApiResult<Event[]>> => {
    try {
        const res = await fetch(`https://localhost:7187/api/events/${date}`);

        if (!res.ok) {
            const errorText = await res.text();
            return {
                success: false,
                message: `Kunde inte hämta evenemang: ${res.status} - ${errorText}`,
            };
        }

        const data = await res.json();
        return { success: true, data };
    } catch (error) {
        console.error("Error fetching events:", error);
        return {
            success: false,
            message: "Nätverksfel. Kunde inte hämta evenemang.",
        };
    }
};

export const createEvent = async (
    newEvent: Event
): Promise<ApiResult<Event>> => {
    try {
        const res = await fetch("https://localhost:7187/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        if (!res.ok) {
            const errorText = await res.text();
            return {
                success: false,
                message: `Kunde inte skapa evenemang: ${res.status} - ${errorText}`,
            };
        }

        const data = await res.json();
        return { success: true, data };
    } catch (error) {
        console.error("Error creating event:", error);
        return {
            success: false,
            message: "Nätverksfel. Kunde inte skapa evenemang.",
        };
    }
};
