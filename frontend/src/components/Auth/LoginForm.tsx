import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import Button from "../Button/Button.tsx";
import FormInput from "../Form/FormInput.tsx";

type User = {
    email: string;
    password: string;
};

type LoginFormProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ setIsLoggedIn }: LoginFormProps) => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    const [data, setData] = useState<User>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!data.email || !data.password) {
            toast.error("Fyll i både email och lösenord!", {
                position: "top-center",
            });
            return;
        }

        try {
            const response = await fetch(
                "https://localhost:7187/api/users/authenticate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                toast.error("Felaktigt användarnamn eller lösenord!", {
                    position: "top-center",
                });
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            if (result) {
                localStorage.setItem("token", result.token);
                setToken(result.token);
                toast.success("Du är inloggad!", {
                    position: "top-center",
                });
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <FormInput
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="E-post"
            />
            <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="Lösenord"
            />
            <Button
                design="outline"
                className="bg-yellow_green-900 hover:bg-yellow_green-800"
            >
                Logga in
            </Button>
            <p>
                Inget konto?{" "}
                <span className="text-[#7a7a7a] cursor-pointer hover:text-black">
                    <Link to="/signup">Skapa konto här.</Link>
                </span>
            </p>
        </form>
    );
};

export default LoginForm;
