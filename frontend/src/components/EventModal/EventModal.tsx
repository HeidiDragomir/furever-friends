import { format } from "date-fns";
import Button from "../Button/Button.tsx";

type EventModalProps = {
    formData: {
        date: string;
        title: string;
        description: string;
        time: string;
        location: string;
        city: string;
        type: string;
    };
    handleChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
    handleSubmit: () => void;
    isSubmitting: boolean;
    setShowModal: (show: boolean) => void;
    selectedDate: Date;
};

const EventModal = ({
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    setShowModal,
    selectedDate,
}: EventModalProps) => {
    console.log("Form data in modal:", formData);
    return (
        <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Skapa nytt evenemang</h2>
            <div className="space-y-4">
                <p className="text-md text-gray-500">
                    Fyll i informationen nedan för att skapa ett nytt evenemang.
                </p>
                <p className="text-md text-gray-500">
                    Du kan alltid redigera eller ta bort det senare.
                </p>
                <input
                    name="date"
                    value={format(selectedDate, "yyyy-MM-dd")}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                    disabled
                />

                <input
                    name="title"
                    placeholder="Titel"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <textarea
                    name="description"
                    placeholder="Beskrivning"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <input
                    name="time"
                    placeholder="Tid (t.ex. 14:00)"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <input
                    name="location"
                    placeholder="Plats"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <input
                    name="city"
                    placeholder="Stad"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                >
                    <option value="hund">🐶 Hundträff</option>
                    <option value="katt">🐱 Kattträff</option>
                </select>
                <div className="flex justify-center space-x-2">
                    <Button
                        design="outline"
                        onClick={() => setShowModal(false)}
                    >
                        Avbryt
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        design="outline"
                        className="bg-yellow_green-700"
                    >
                        {isSubmitting ? "Skapar..." : "Skapa"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
