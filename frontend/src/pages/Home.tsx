import Advertisement from "../components/Advertisement/Advertisement.tsx";
import Card from "../components/Card/Card.tsx";
import Hero from "../components/Hero/Hero.tsx";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <Hero />
            <div className="flex flex-col items-center justify-center border-t-2 border-b-2 bg-steel_blue-800 border-black mb-8">
                <Card
                    image="images/map.png"
                    title="Interaktiv karta"
                    description="Upptäck djurvänliga platser nära dig - från veterinärer och hundrastgårdar till kaféer där din pälskling är välkommen."
                    pageUrl="/interactive-map"
                />
                <Card
                    image="images/event.png"
                    title="Kalender &amp; Evenemang"
                    description="Skapa eller gå med i hundpromenader och kattträffar! Organisera lokala evenemang och hitta nya vänner - både två- och fyrbenta."
                    pageUrl="/calendar"
                />
                <Card
                    image="images/marketplace.png"
                    title="Marknadsplats"
                    description="Byt, skänk eller sälj djurtillbehör du inte längre behöver. Håll det hållbart - och hjälp andra på köpet!"
                    pageUrl="/marketplace"
                />
                <Card
                    image="images/pets.png"
                    title="Adoption &amp; foster"
                    description="Ge ett djur en andra chans. Utforska djurhem i närheten och anmäl dig som adoptiv- eller fosterhem direkt via appen."
                    pageUrl="/adoptions"
                />
                <Card
                    image="images/volunteering.png"
                    title="Volontärarbete"
                    description="Vill du göra skillnad? Hitta volontäruppdrag hos djurorganisationer och hjälp djur som behöver dig – på riktigt."
                    pageUrl="/volunteering"
                />
                <Card
                    image="images/chat.png"
                    title="Community/Forum"
                    description="Ställ frågor, dela tips eller ventilera vardagen som djurägare. Ett tryggt och aktivt forum för alla med tassar i hjärtat."
                    pageUrl="/community"
                />
            </div>
            <Advertisement />
        </div>
    );
};

export default Home;
