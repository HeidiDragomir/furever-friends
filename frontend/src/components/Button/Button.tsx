type ButtonProps = {
    children: React.ReactNode;
    design?: "outline" | "solid";
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ children, onClick, design, className }: ButtonProps) => {
    if (design === "outline") {
        return (
            <button
                className={
                    className +
                    " " +
                    "flex items-center justify-center cursor-pointer w-fit h-[45px] border-black border-solid border-2 rounded-md text-sm font-semibold text-center px-4 py-2 uppercase italic"
                }
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    return (
        <button
            className="cursor-pointer w-[120px] h-[45px] border-black border-solid border-2 rounded-2xl text-white bg-[#7a7a7a] hover:bg-white hover:text-[#7a7a7a]"
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
