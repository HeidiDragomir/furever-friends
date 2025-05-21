import { format } from "date-fns";
import Button from "../components/Button/Button.tsx";
import CardItem from "../components/Card/CardItem.tsx";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface Item {
    id: number;
    title: string;
    description: string;
    image: string;
    altImage: string;
    location: string;
    date: string; // "yyyy-MM-dd"
    username: string;
    type: string;
    pageUrl?: string;
}
const Marketplace = () => {
    const [items, setItems] = useState<Item[]>([]);

    const getItems = async () => {
        try {
            const response = await fetch("https://localhost:7187/api/items");
            if (!response.ok) {
                throw new Error("Kunde inte hämta djurartiklar.");
            }

            const data: Item[] = await response.json();
            console.log("Items from API:", data);
            setItems(data);
        } catch (error) {
            console.error(error);
            toast.error("Fel vid hämtning av djurartiklar.");
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="border-t-2 border-b-2 w-full mt-7 bg-yinmn_blue-900">
                <ul className="flex gap-4 justify-center">
                    <li>
                        <Button design="nav">Skänk</Button>
                    </li>
                    <li className="border-x-2 px-2">
                        <Button design="nav">Byt</Button>
                    </li>
                    <li>
                        <Button design="nav">Efterlys</Button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 border-t-2 border-b-2 border-black mb-8">
                {items.length === 0 ? (
                    <p className="text-center py-8 text-slate-600">
                        Inga annonser tillgängliga.
                    </p>
                ) : (
                    items.map((item) => (
                        <CardItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            altImage={item.altImage}
                            location={item.location}
                            date={item.date}
                            username={item.username}
                            type={item.type}
                            pageUrl={item.pageUrl}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Marketplace;
