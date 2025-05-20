import { NavLink } from "react-router";
import Button from "../Button/Button.tsx";

type CardItemProps = {
    image?: string;
    altImage?: string;
    title?: string;
    description?: string;
    pageUrl: string;
};

const CardItem = ({ image, title, description, altImage }: CardItemProps) => {
    return (
        <div className="flex flex-col flex-1 items-center border-2 border-black rounded-xl my-4 mx-4 h-fit ">
            <div className="bg-deep_sky_blue-800 border-b-2 border-black w-full h-[200px] flex items-center justify-center rounded-t-xl">
                <img
                    src="images/scratching-toy.png"
                    alt={altImage}
                    className="w-70"
                />
            </div>
            <div className="py-2 px-2 flex flex-col gap-2">
                <p className="text-xs underline decoration-2 italic font-semibold mb-4">
                    Skänkes
                </p>
                <div>
                    <h2 className="text-md font-semibold mb-4">
                        Klösträd i fint skick
                    </h2>
                    <div className="flex justity-center gap-2 mb-2">
                        <img
                            src="images/place.png"
                            alt="Location"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">Nässjö</p>
                    </div>

                    <p className="text-sm mb-4 line-clamp-3">
                        Ett stabilt klösträd som min katt inte använder längre.
                        Hämtas i Majorna.
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
                        <p className="text-xs text-slate-500">Heidi</p>
                    </div>
                </div>
                <div className="flex justify-center my-2">
                    <Button
                        design="outline"
                        className="bg-yellow_green-800 hover:bg-yellow_green-700"
                        onClick={() => console.log("Contact user")}
                    >
                        Kontakta
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
