import LoginForm from "../components/Auth/LoginForm.tsx";

type LoginProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
    

  return (
    <div className="h-[100vh] w-full p-12 m-12">
        <div className="flex flex-col gap-4 justify-center items-center my-12 p-12">
                <h1 className="text-3xl font-bold my-4">Logga in</h1>
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
            
    </div>
    
  )
}

export default Login