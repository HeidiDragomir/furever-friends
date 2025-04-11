import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

type User = {
    name: string;
    email: string;
    password: string;
};

const SignupForm = () => {
    const navigate = useNavigate();

    const [data, setData] = useState<User>({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!data.name || !data.email || !data.password) {
          toast.error("Alla fält måste fyllas i!", { position: "top-center" });
          return;
        }
        localStorage.setItem("User", JSON.stringify(data));
        toast.success("Ditt konto har skapats!", { position: "top-center" });
        navigate("/login");
    
      } 


  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">   
        <div>
            <label className="text-lg font-medium inline-block text-black px-2 input-label">Namn</label>
            <input type="text" name="name" onChange={handleChange} value={data.name} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700  bg-white focus:border-blue-600 focus:outline-none required"/>
        </div>
          
        <div>
            <label className="text-lg font-medium inline-block text-black px-2 input-label">Email</label>
            <input type="email" name="email" onChange={handleChange} value={data.email} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none" required/>
        </div>
        <div>
            <label className="text-lg font-medium inline-block text-black px-2 input-label">Lösenord</label>
            <input type="password" name="password" onChange={handleChange} value={data.password} className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none" required/>
         </div>
                    
        <button type="submit" className="cursor-pointer w-[130px] h-[45px] border-black border-solid border-2 rounded-2xl text-white bg-[#7a7a7a] hover:bg-white hover:text-[#7a7a7a] px-2">
        Skapa konto</button>
        <p>Redan har du ett konto? <span className="text-[#7a7a7a] cursor-pointer hover:text-black"><Link to="/login">Logga in här.</Link></span></p>
    </form>
    
  )
}

export default SignupForm