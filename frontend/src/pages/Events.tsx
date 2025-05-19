import { useEffect, useState } from "react";
import { format, formatDate, parseISO } from "date-fns";
import { sv } from "date-fns/locale";
import toast from "react-hot-toast";
import Calendar from "react-calendar";
import Button from "../components/Button/Button.tsx";
import EventModal from "../components/EventModal/EventModal.tsx";
import "../App.css";

interface Event {
    id: number;
    date: string; // "yyyy-MM-dd"
    title: string;
    description: string;
    time: string;
    location: string;
    city: string;
    type: string;
}

const Events = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState<Event[]>([]);
    const [formData, setFormData] = useState({
        date: format(selectedDate, "yyyy-MM-dd"),
        title: "",
        description: "",
        time: "",
        location: "",
        city: "",
        type: "hund",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const eventsForDate = events.filter((e) => {
        const eventDate = formatDate(parseISO(e.date), "yyyy-MM-dd");
        return eventDate === formattedDate;
    });
    const dayWithText = format(selectedDate, "eeee',' 'den' d MMMM yyyy", {
        locale: sv,
    });

    console.log("Selected date:", formattedDate);

    const handleChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!formData.title || !formData.time || !formData.location) return;

        setIsSubmitting(true);

        const newEvent = {
            ...formData,
            date: format(selectedDate, "yyyy-MM-dd"),
        };

        try {
            const response = await fetch("https://localhost:7187/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEvent),
            });

            if (!response.ok) {
                throw new Error("Något gick fel vid skapandet av evenemanget.");
            }

            const savedEvent = await response.json();

            setEvents((prev) => [...prev, savedEvent]);

            setShowModal(false);

            setFormData({
                date: format(selectedDate, "yyyy-MM-dd"),
                title: "",
                description: "",
                time: "",
                location: "",
                city: "",
                type: "hund",
            });

            toast.success("Evenemanget har skapats!", {
                position: "top-center",
            });
        } catch (error) {
            console.error(error);
            toast.error("Fel vid skapande av evenemang.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getEvents = async (date: Date) => {
        const formatted = format(date, "yyyy-MM-dd");

        try {
            const response = await fetch(
                `https://localhost:7187/api/events/${formatted}`
            );
            if (!response.ok) {
                throw new Error("Kunde inte hämta evenemang.");
            }

            const data: Event[] = await response.json();
            console.log("Events from API:", data);
            setEvents((prevEvents) => {
                // Filter out events with the same date
                const withoutDate = prevEvents.filter(
                    (e) => e.date !== formatted
                );
                return [...withoutDate, ...data];
            });
        } catch (error) {
            console.error(error);
            toast.error("Fel vid hämtning av evenemang.");
        }
    };

    useEffect(() => {
        getEvents(selectedDate);
    }, [selectedDate]);

    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col items-center text-center py-8 px-6 bg-yellow_green-900 border-2 rounded-xl my-8 mx-4 gap-4">
                <h2 className="text-xl font-semibold mb-2">
                    Utforska nya vänskaper -<br />
                    med både tassar och skratt!
                </h2>
                <p className="text-lg text-gray-600">
                    Delta i mysiga kattträffar eller hundpromenader i närheten.
                </p>
                <p className="text-lg text-gray-600">
                    Skapa egna evenemang <br />
                    och hitta gemenskap i ditt närområde.
                </p>
            </div>
            <div>
                <div className="flex flex-col items-center text-center py-8 px-6 bg-deep_sky_blue-900 border-2 rounded-xl mb-18 mx-4 gap-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Välj ett datum i kalendern
                    </h2>
                    <p className="text-lg text-gray-600">
                        Klicka på ett datum för att visa alla inlagda evenemang
                        eller skapa ett nytt.
                    </p>
                    <p className="text-lg text-gray-600">
                        Ditt valda datum används automatiskt i formuläret!
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Calendar
                        minDate={new Date()}
                        // onChange={setSelectedDate}
                        onClickDay={(date) => setSelectedDate(date)}
                        value={selectedDate}
                        defaultValue={
                            selectedDate ? new Date(selectedDate) : undefined
                        }
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center text-center py-8 px-6 bg-yellow_green-900 border-2 rounded-xl my-8 mx-4 gap-4">
                <h2 className="text-xl font-semibold mt-4 mb-4">
                    Evenemang för <br />
                    {dayWithText}:
                </h2>
                {eventsForDate.length === 0 ? (
                    <p className="text-gray-500 w-3/4 mb-4">
                        Inga evenemang hittades för detta datum.
                    </p>
                ) : (
                    <ul className="flex flex-col gap-8 w-full mb-8">
                        {eventsForDate.map((event) => (
                            <li
                                key={event.id}
                                className="p-4 border rounded-lg shadow-sm bg-white"
                            >
                                <div className="flex flex-col items-center">
                                    <h3 className="font-bold text-lg mb-4">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center justify-center gap-2">
                                        <img
                                            src="images/clock.png"
                                            alt="Clock"
                                            className="w-4 h-4"
                                        />
                                        <p className="text-sm mt-1">
                                            {event.time} |
                                        </p>
                                        <img
                                            src="images/pin.png"
                                            alt=""
                                            className="w-4 h-4"
                                        />
                                        <p className="text-sm mt-1">
                                            {event.location},
                                        </p>
                                    </div>
                                    <p className="text-sm mb-4">{event.city}</p>

                                    <Button
                                        className="mt-2 bg-yellow_green-700"
                                        design="outline"
                                    >
                                        Gå med
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {!showModal && (
                    <Button
                        onClick={() => setShowModal(true)}
                        className="my-6"
                        design="outline"
                    >
                        Skapa nytt evenemang
                        <img
                            src="images/add.png"
                            alt="Plus icon"
                            className="w-10 h-10 ml-2"
                        />
                    </Button>
                )}

                {showModal && (
                    <EventModal
                        selectedDate={selectedDate}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Events;
