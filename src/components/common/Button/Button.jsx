import clsx from "clsx";

function Button({ content, isPrimary,className,...props }) {
    return (
        <button
            {...props}
            className={clsx(`px-6 py-3 rounded-xl border cursor-pointer ${
                isPrimary
                    ? 'bg-second-light text-white hover:bg-white hover:text-second-light'
                    : 'bg-dark text-white hover:text-dark hover:bg-gray-100'
            }`,className)}
        >
            {content}
        </button>
    );
}

export default Button;
