function CartItem({ image, name, color, size, price, quantity, onIncrease, onDecrease, onRemove }) {
    return (
        <div className='flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm'>
            <img
                src={image}
                alt={name}
                className='w-20 h-20 object-cover rounded-xl flex-shrink-0 bg-gray-100'
            />

            <div className='flex-1 min-w-0'>
                <p className='font-semibold text-gray-900 truncate'>{name}</p>
                <p className='text-xs text-gray-400 mt-0.5'>
                    {[color, size].filter(Boolean).join(' • ')}
                </p>
            </div>

            {/* Quantity controls */}
            <div className='flex items-center gap-3'>
                <button
                    onClick={onDecrease}
                    className='w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm'
                >
                    −
                </button>
                <span className='w-4 text-center text-sm font-medium text-gray-800'>
                    {quantity}
                </span>
                <button
                    onClick={onIncrease}
                    className='w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm'
                >
                    +
                </button>
            </div>

            {/* Price + remove */}
            <div className='text-right min-w-[80px]'>
                <p className='font-semibold text-gray-900'>
                    ${(price * quantity).toFixed(2)}
                </p>
                
                <button
                    onClick={onRemove}
                    className='text-[10px] font-bold text-red-400 hover:text-red-600 uppercase tracking-wide mt-1 transition-colors'
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;