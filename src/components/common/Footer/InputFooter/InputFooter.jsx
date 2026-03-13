function InputFooter({type,placeHolder}) {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            className='bg-transparent px-4 py-2 text-sm outline-none w-full'
        />
    );
}

export default InputFooter;
