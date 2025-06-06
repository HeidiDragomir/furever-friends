type ButtonProps = {
    children: React.ReactNode;
    design?: "outline" | "nav" | "outline-small" | "default";
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
                    "flex items-center justify-center cursor-pointer w-fit h-[45px] sm:h-[55px] border-black border-solid border-2 rounded-md text-sm sm:text-xl font-semibold text-center px-4 py-2 uppercase italic"
                }
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (design === "outline-small") {
        return (
            <button
                className={
                    className +
                    " " +
                    "flex items-center justify-center cursor-pointer w-fit h-[40px] border-black border-solid border-2 rounded-md text-xs font-semibold text-center px-4 py-2 uppercase italic"
                }
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (design === "nav") {
        return (
            <button
                className={
                    className +
                    " " +
                    "flex items-center justify-center cursor-pointer w-fit text-sm text-center px-4 py-2 uppercase italic font-bold focus:bg-chinese_violet-600 focus:text-white tracking-wider"
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
            className={
                className +
                " " +
                "cursor-pointer w-[240px] h-[45px] border-black border-solid border-2 rounded-2xl text-white hover:bg-white"
            }
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
