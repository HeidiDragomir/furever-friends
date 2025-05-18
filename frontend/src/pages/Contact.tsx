const Contact = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center py-8 px-6 bg-china_rose-900 border-2 rounded-xl mt-4 mx-4 gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Kontakta oss - <br /> Vi hör gärna från dig!
                    </h2>
                    <div className="flex gap-2 justify-center">
                        <img src="images/paws.png" alt="Paws" className="w-8" />
                        <img src="images/dog.png" alt="Dog" className="w-8" />
                        <img src="images/cat.png" alt="Cat" className="w-8" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-lg my-4">
                        För allmänna frågor, samarbeten eller support:
                    </p>
                    <p className="text-lg mb-4">
                        <span className="font-semibold">E-post:</span>{" "}
                        kontakt@fureverfriends.se
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Adress:</span>
                        <br /> FurEver Friends, Innovationsgatan 5, <br />
                        123 45 Djurstad
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
