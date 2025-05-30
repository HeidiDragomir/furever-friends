import { ChangeEvent, useState } from "react";

interface FormInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;

    // Regular expression for custom validation
    validationRegex?: RegExp;

    // Error message to display when validation fails
    errorMessage?: string;

    // If true, field is required
    required?: boolean;

    // Custom label for the input
    label?: string;
}

// FormInput is a reusable input field with built-in validation support:
// - Shows validation error based on provided regex
// - Fully configurable through props

const FormInput = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    className,
    validationRegex,
    errorMessage = "Ogiltigt värde.",
    required = false,
    label,
}: FormInputProps) => {
    // State to track if the user has interacted with the input field
    const [userInteractedWith, setUserInteractedWith] = useState(false);

    // Determine if the current value is valid:
    // - If no validation regex is provided the field is considered valid
    // - If a regex is provided, test the current value against it
    const isValid =
        !validationRegex || (value && validationRegex.test(value.toString()));

    // Show an error only if the value is invalid and the user has interacted with the field
    // (prevents showing error messages before the user starts typing or blurs the input)
    const showError = !isValid && userInteractedWith;

    // When the input field loses focus (onBlur) mark it as "interacted"
    // This is used to delay showing errors until the user has engaged with the field
    const handleBlur = () => {
        setUserInteractedWith(true);
    };

    return (
        <div>
            {label && (
                <label
                    htmlFor={name}
                    className="text-lg font-medium inline-block text-black"
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                required={required}
                placeholder={placeholder}
                className={`block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-clip-padding border-solid border-2 transition ease-in-out m-0 focus:text-gray-700 bg-white focus:border-blue-600 focus:outline-none ${
                    showError
                        ? "border-red-500"
                        : "border-gray-300 focus:border-blue-600"
                } ${className || ""}`}
            />
            {showError && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

export default FormInput;
