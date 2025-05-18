import Button from "../Button/Button.tsx";

type CardPetProps = {
    image: string;
};

const CardPet = ({ image }: CardPetProps) => {
    return (
        <div className="flex flex-col flex-1 items-center border-2 border-black rounded-xl my-6 mx-4 h-fit relative">
            <div className="bg-deep_sky_blue-800 border-b-2 border-black w-full h-[200px] flex items-center justify-center rounded-t-xl">
                <img src={image} alt="" className="w-30 absolute -top-5" />
            </div>
            <div className="py-2 px-2 flex flex-col gap-2">
                <div className="my-4">
                    <h2 className="text-xl font-semibold mb-2">Garfield</h2>
                    <div className="flex justity-center gap-2 mb-2">
                        <img
                            src="images/paw.png"
                            alt="Location"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">Katt, 7 år</p>
                    </div>
                    <div className="flex justity-center gap-2 mb-6">
                        <img
                            src="images/place.png"
                            alt="Location"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">Nässjö</p>
                    </div>

                    <p className="text-sm mb-4 line-clamp-3">
                        En orange livsnjutare som älskar solfläckar, kattgodis
                        och att bli beundrad. En riktig myspropp med mycket
                        personlighet!
                    </p>
                </div>
                <div>
                    <div className="flex justity-center gap-2">
                        <img
                            src="images/date.png"
                            alt="Date"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">2025-05-07</p>
                    </div>
                    <div className="flex justity-center gap-2">
                        <img
                            src="images/user.png"
                            alt="User"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">KattHem</p>
                    </div>
                </div>
                <div className="flex justify-center my-2">
                    <Button
                        design="outline"
                        className="bg-yellow_green-800 hover:bg-yellow_green-700"
                        onClick={() => console.log("Contact user")}
                    >
                        Den är min!
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CardPet;
