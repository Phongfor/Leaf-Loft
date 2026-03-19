function FormField({ label, children }) {
    return (
        <div className='flex flex-col gap-1.5'>
            <label className='text-[10px] tracking-[1.5px] text-gray-400 uppercase font-medium'>
                {label}
            </label>
            {children}
        </div>
    );
}

export default FormField;