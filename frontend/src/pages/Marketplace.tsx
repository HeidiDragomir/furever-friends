import Button from "../components/Button/Button.tsx";
import CardItem from "../components/Card/CardItem.tsx";

const Marketplace = () => {
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="border-t-2 border-b-2 w-full mt-7 bg-yinmn_blue-900">
                <ul className="flex gap-4 justify-center">
                    <li>
                        <Button design="nav">Skänk</Button>
                    </li>
                    <li>
                        <Button design="nav">Byt</Button>
                    </li>
                    <li>
                        <Button design="nav">Efterlys</Button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 border-t-2 border-b-2 border-black mb-8">
                <CardItem />
                <CardItem />
            </div>
            {/* Donate, exchange, or request pet items  */}
        </div>
    );
};

export default Marketplace;
