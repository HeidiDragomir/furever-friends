interface FormInputProps {
    label?: string;
    type: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    placeholder?: string;
    className?: string;
}

const FormInput = ({
    label,
    type,
    name,
    onChange,
    value,
    placeholder,
    className,
}: FormInputProps) => {
    return (
        <div>
            <label className="text-lg font-medium inline-block text-black">
                {label}
            </label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                className={
                    "block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none" +
                    " " +
                    className
                }
                required
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;
