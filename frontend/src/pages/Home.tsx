import Card from "../components/Card/Card.tsx";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-12 min-h-screen">
            <h1 className="text-4xl font-bold mb-24">
                Välkommen till FurEver Friends
            </h1>

            <Card />
        </div>
    );
};

export default Home;
