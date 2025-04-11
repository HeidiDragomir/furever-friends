import SignupForm from "../components/Auth/SignupForm.tsx";

const Signup = () => {
    
return (
    <div className="h-[100vh] w-full p-12 m-12">
        <div className="flex flex-col gap-4 justify-center items-center my-12 p-12">
            <h1 className="text-3xl font-bold my-4">Skapa konto</h1>
            <SignupForm />
        </div>
            
    </div>
    
)
}

export default Signup