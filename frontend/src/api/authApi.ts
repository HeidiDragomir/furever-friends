import { ApiResult } from "../types/ApiResult.ts";

// REGISTER
export const registerUser = async (
    username: string,
    email: string,
    password: string
): Promise<ApiResult<null>> => {
    try {
        const res = await fetch("https://localhost:7187/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            return {
                success: false,
                message: `Registrering misslyckades: ${res.status} - ${errorText}`,
            };
        }

        return { success: true };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message:
                "Kunde inte nå servern. Kontrollera din internetanslutning.",
        };
    }
};

// LOGIN
export const loginUser = async (
    email: string,
    password: string
): Promise<ApiResult<{ token: string }>> => {
    try {
        const res = await fetch(
            "https://localhost:7187/api/users/authenticate",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
        );

        if (!res.ok) {
            const errorText = await res.text();
            return {
                success: false,
                message: `Inloggning misslyckades: ${res.status} - ${errorText}`,
            };
        }

        const data = await res.json();

        return { success: true, data: { token: data.token } };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message:
                "Kunde inte nå servern. Kontrollera din internetanslutning.",
        };
    }
};
