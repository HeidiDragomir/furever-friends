import { NavLink } from "react-router";

type CardProps = {
    image?: string;
    altImage?: string;
    title?: string;
    description?: string;
    pageUrl: string;
};

const Card = ({ image, title, description, altImage, pageUrl }: CardProps) => {
    return (
        <NavLink
            to={pageUrl}
            className="flex flex-col items-center gap-4 border-2 border-black rounded-xl py-4 px-8 sm:p-12 my-4 mx-4 w-9/10 h-[350px] bg-brilliant_rose-800 relative sm:w-1/2"
        >
            <div className="mb-4">
                <img src={image} alt={altImage} />
            </div>
            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-left sm:w-full sm:h-full">
                <h2 className="text-xl sm:text-3xl font-semibold mb-4">{title}</h2>
                <p className="text-md sm:text-2xl">{description}</p>
            </div>
            <div className="flex justify-end w-full absolute bottom-4 right-4">
                <img
                    src="images/right-arrow.png"
                    alt="Next arrow"
                    className="w-10 h-10 cursor-pointer"
                />
            </div>
        </NavLink>
    );
};

export default Card;
