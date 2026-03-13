// FormOption.jsx
function ButtonOption({ type = 'radio', id, name, value, checked, onChange, label }) {
    return (
        <label htmlFor={id} className="flex gap-2 cursor-pointer">
            <input
                type={type}
                id={id}
                name={name ?? id}
                value={value}
                autoComplete="off"
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    );
}

export default ButtonOption;