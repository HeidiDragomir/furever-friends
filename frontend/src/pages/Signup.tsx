import SignupForm from "../components/Auth/SignupForm.tsx";

const Signup = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center py-8 px-6 bg-china_rose-900 border-2 rounded-xl mt-4 mx-4 gap-8">
                <h1 className="text-3xl font-bold my-4">Skapa konto</h1>
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;
