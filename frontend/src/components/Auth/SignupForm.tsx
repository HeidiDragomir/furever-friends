import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import Button from "../Button/Button.tsx";
import FormInput from "../Form/FormInput.tsx";
import { UserContext } from "../../context/UserContext.tsx";

const SignupForm = () => {
    const navigate = useNavigate();
    const { register } = useContext(UserContext);

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("data", data);
        // Validation
        if (!data.username || !data.email || !data.password) {
            toast.error("Alla fält måste fyllas i!", {
                position: "top-center",
            });
            return;
        }
        const success = await register(
            data.username,
            data.email,
            data.password
        );

        if (success) {
            toast.success("Ditt konto har skapats!", {
                position: "top-center",
            });
            navigate("/login");
        } else {
            toast.error("Något gick fel, försök igen.", {
                position: "top-center",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormInput
                placeholder="Namn"
                type="text"
                name="username"
                onChange={handleChange}
                value={data.username}
            />

            <FormInput
                placeholder="E-post"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
            />

            <FormInput
                placeholder="Lösenord"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
            />

            <Button
                design="outline"
                className="bg-yellow_green-900 hover:bg-yellow_green-800"
                type="submit"
            >
                Skapa konto
            </Button>
            <p>
                Redan har du ett konto?{" "}
                <span className="text-[#7a7a7a] cursor-pointer hover:text-black">
                    <Link to="/login">Logga in här.</Link>
                </span>
            </p>
        </form>
    );
};

export default SignupForm;
