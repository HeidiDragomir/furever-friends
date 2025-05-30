import { ChangeEvent, useContext, useState } from "react";
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Validation
        if (!data.username) {
            toast.error("Ange ett namn.", {
                position: "top-center",
            });
            return;
        }

        if (!emailRegex.test(data.email)) {
            toast.error("Ogiltig e-postadress.", { position: "top-center" });
            return;
        }

        if (!passwordRegex.test(data.password)) {
            toast.error(
                "Lösenord måste vara minst 8 tecken och innehålla minst en bokstav och en siffra.",
                { position: "top-center" }
            );
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
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Namn"
                label="Namn"
                required
                validationRegex={/^.{3,}$/}
                errorMessage="Ange ett giltigt namn (minst 3 tecken)."
            />

            <FormInput
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="E-post"
                label="E-post"
                required
                validationRegex={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
                errorMessage="Ange en giltig e-postadress."
            />

            <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="Lösenord"
                label="Lösenord"
                required
                validationRegex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
                errorMessage="Minst 8 tecken, inklusive en bokstav och en siffra."
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
