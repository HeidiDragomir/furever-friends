type DropdownProps = {
    items: Array<string>;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    refProp?: React.Ref<HTMLSelectElement>;
    className?: string;
    title?: string;
};

const Dropdown = ({ items, onChange, refProp, title }: DropdownProps) => {
    // const [open, setOpen] = useState(false);
    // const [currentValue, setCurrentValue] = useState(null);

    // const handleClick = (e: any) => {
    //     const { value } = e.target.dataset;
    //     setCurrentValue(value);
    //     setOpen(false);
    // };

    return (
        <>
            <div className="flex flex-row">
                <select
                    onChange={onChange}
                    ref={refProp}
                    className="block w-full px-4 py-2 text-lg font-normal text-gray-700 border-solid border-2 transition ease-in-out m-0 bg-white"
                >
                    <option className="bg-white text-gray-700" value={title}>
                        {title}
                    </option>
                    {items.map((item, index) => {
                        return (
                            <option
                                className="bg-white text-gray-700"
                                key={index}
                                value={item}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export default Dropdown;
