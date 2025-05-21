import Button from "../Button/Button.tsx";
import { format } from "date-fns";

type CardItemProps = {
    title: string;
    description: string;
    image: string;
    altImage: string;
    location: string;
    date: string; // "yyyy-MM-dd"
    username: string;
    type: string;
    pageUrl?: string;
};

const CardItem = ({
    image,
    title,
    description,
    altImage,
    location,
    date,
    username,
    type,
}: CardItemProps) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd");

    return (
        <div className="flex flex-col flex-1 items-center border-2 border-black rounded-xl my-4 mx-4 h-fit ">
            <div className="bg-deep_sky_blue-800 border-b-2 border-black w-full h-[200px] flex items-center justify-center rounded-t-xl">
                <img src={image} alt={altImage} className="w-70" />
            </div>
            <div className="py-2 px-2 flex flex-col gap-2">
                <p className="text-xs underline decoration-2 italic font-semibold mb-4">
                    {type}
                </p>
                <div>
                    <h2 className="text-md font-semibold mb-4">{title}</h2>
                    <div className="flex justity-center gap-2 mb-2">
                        <img
                            src="images/place.png"
                            alt="Location"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">{location}</p>
                    </div>

                    <p className="text-sm mb-4 line-clamp-3">{description}</p>
                </div>
                <div>
                    <div className="flex justity-center gap-2">
                        <img
                            src="images/date.png"
                            alt="Date"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">
                            {formattedDate}
                        </p>
                    </div>
                    <div className="flex justity-center gap-2">
                        <img
                            src="images/user.png"
                            alt="User"
                            className="w-3 h-3"
                        />
                        <p className="text-xs text-slate-500">{username}</p>
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
