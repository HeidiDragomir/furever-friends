import { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "../Button/Button.tsx";
import FormInput from "../Form/FormInput.tsx";
import { UserContext } from "../../context/UserContext.tsx";

const LoginForm = () => {
    const { login } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data.email || !data.password) {
            toast.error("Fyll i både e-post och lösenord.", {
                position: "top-center",
            });
        }
        const success = await login(data.email, data.password);

        if (success) {
            toast.success("Du är inloggad!", { position: "top-center" });
            const redirectPath = location.state?.from?.pathname || "/";
            navigate(redirectPath, { replace: true });
        } else {
            toast.error("Felaktigt användarnamn eller lösenord!", {
                position: "top-center",
            });
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
                label="E-post"
                required
            />
            <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="Lösenord"
                label="Lösenord"
                required
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
