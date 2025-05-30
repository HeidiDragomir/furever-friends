import { ApiResult } from "../types/ApiResult.ts";

export interface Item {
    id: number;
    title: string;
    description: string;
    image: string;
    altImage: string;
    location: string;
    date: string; // "yyyy-MM-dd"
    username: string;
    type: string;
    pageUrl?: string;
}

export const fetchAllItems = async (): Promise<ApiResult<Item[]>> => {
    try {
        const response = await fetch("https://localhost:7187/api/items");

        if (!response.ok) {
            return {
                success: false,
                message: "Kunde inte hämta djurartiklar.",
            };
        }

        const data: Item[] = await response.json();
        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error("Fetch items error:", error);
        return {
            success: false,
            message: "Ett fel inträffade vid hämtning av artiklar.",
        };
    }
};
