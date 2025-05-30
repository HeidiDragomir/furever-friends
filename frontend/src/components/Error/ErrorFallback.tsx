import Button from "../Button/Button.tsx";

const ErrorFallback = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 gap-4">
            <img
                src="/images/error-page.png"
                alt="Error"
                className="w-24 h-24 mb-6"
            />
            <h2 className="text-2xl font-bold text-light_coral-400 mb-2">
                Oj då! Något gick fel.
            </h2>
            <p className="text-main_text font-semibold mb-4">
                Vi är ledsna, men ett oväntat fel har inträffat.
            </p>
            <Button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-yellow_green-400 text-white rounded-lg hover:bg-yellow_green-300 transition"
            >
                Uppdatera sidan
            </Button>
        </div>
    );
};

export default ErrorFallback;
