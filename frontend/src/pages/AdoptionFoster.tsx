import Button from "../components/Button/Button.tsx";

const AdoptionFoster = () => {
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col justify-center items-center py-8 px-6 bg-brilliant_rose-900 border-2 rounded-xl mt-8 mb-4 mx-4 gap-4">
                <h2 className="text-xl font-semibold">
                    Ge en tass en chans - adoptera eller bli fosterhem
                </h2>
                <div className="flex gap-2 justify-around">
                    <Button
                        design="outline-small"
                        className="text-sm bg-bittersweet-700"
                    >
                        Se djur
                        <br /> som söker hem
                    </Button>
                    <Button design="outline-small" className="text-sm">
                        Bli fosterhem
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdoptionFoster;
