type FormCheckboxProps = {
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    label?: string;
    required?: boolean;
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    size?: string;
};

const FormCheckbox = ({
    className,
    onChange,
    value,
    name,
    label,
    required,
    checked,
    disabled,
    defaultChecked,
    size,
}: FormCheckboxProps) => {
    //   if (size == 'small') {
    //     var styleObj = {width: '26px', height: '26px'}
    //   }

    return (
        <label
            className={
                "flex flex-row items-center gap-4" +
                " " +
                className +
                " " +
                size
            }
        >
            <input
                onChange={onChange}
                type="checkbox"
                value={value}
                name={name}
                className="bg-gray-100 accent-gray-500 border-gray-300 cursor-pointer w-5 h-5"
                required={required}
                checked={checked}
                disabled={disabled}
                defaultChecked={defaultChecked}
            />
            {/* <span style={styleObj} className="checkmark"></span> */}
            <span className="font-medium title">{label}</span>
        </label>
    );
};

export default FormCheckbox;
