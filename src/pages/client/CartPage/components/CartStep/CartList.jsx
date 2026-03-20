import CartItem from './CartItem';

function CartList({ items, onIncrease, onDecrease, onRemove }) {
    if (items.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center py-24 bg-white rounded-2xl text-center'>
                <p className='text-5xl mb-4'>🛒</p>
                <p className='font-semibold text-gray-700'>Your cart is empty</p>
                <p className='text-sm text-gray-400 mt-1'>
                    Add some products to get started
                </p>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-3'>
            {items.map((item) => (
                <CartItem
                    key={`${item.id}-${item.color}-${item.size}`}
                    {...item}
                    onIncrease={() => onIncrease(item)}
                    onDecrease={() => onDecrease(item)}
                    onRemove={() => onRemove(item)}
                />
            ))}
        </div>
    );
}

export default CartList;