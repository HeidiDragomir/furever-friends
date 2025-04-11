import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

type User = {
    email: string;
    password: string;
};

type LoginFormProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = ({ setIsLoggedIn }: LoginFormProps) => {
    const navigate = useNavigate(); 

    const [data, setData] = useState<User>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!data.email || !data.password) {
            toast.error("Fyll i både email och lösenord!", { position: "top-center" });
            return;
        }

        const storedUser = localStorage.getItem("User");

        if (storedUser) {

            const user = JSON.parse(storedUser);

            if (user.email === data.email && user.password === data.password) {
                toast.success("Du är inloggad!", { position: "top-center" });
                setIsLoggedIn(true);
                navigate("/");
            } else {
                toast.error("Fel email eller lösenord.", { position: "top-center" });
            }
        } else {
            toast.error("Inget konto hittades. Skapa ett först.", { position: "top-center" });
        }
    };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
            <label className="text-lg font-medium inline-block text-black px-2 input-label">Email</label>
            <input type="email" name="email" onChange={handleChange} value={data.email} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none" required/>
        </div>
        <div>
            <label className="text-lg font-medium inline-block text-black px-2 input-label">Lösenord</label>
            <input type="password" name="password" onChange={handleChange} value={data.password} className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none" required/>
        </div>
        <button type="submit" className="cursor-pointer w-[120px] h-[45px] border-black border-solid border-2 rounded-2xl text-white bg-[#7a7a7a] hover:bg-white hover:text-[#7a7a7a]">
            Logga in</button>
        <p>Inget konto? <span className="text-[#7a7a7a] cursor-pointer hover:text-black"><Link to="/signup">Skapa konto här.</Link></span></p>
                  
    </form>
    
  )
}

export default LoginForm