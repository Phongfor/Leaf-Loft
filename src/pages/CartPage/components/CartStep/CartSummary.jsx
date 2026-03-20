import Button from '@/components/common/Button/Button';
import TrustBadges from '../TrustBadges/TrustBadges';


const SHIPPING = 15;
const TAX_RATE = 0.05;

function CartSummary({ subtotal, onCheckout, disabled,onBackToShop }) {
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const total = +(subtotal + SHIPPING + tax).toFixed(2);

    const rows = [
        { label: 'Subtotal', value: `$${subtotal.toFixed(2)}` },
        { label: 'Estimated Shipping', value: `$${SHIPPING.toFixed(2)}` },
        { label: 'Tax', value: `$${tax.toFixed(2)}` }
    ];

    return (
        <div className='bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5 sticky top-24'>
            <div className='flex items-center gap-2'>
                <span className='text-xl'>🟢</span>
                <h2 className='text-lg font-bold text-gray-900'>
                    Order Summary
                </h2>
            </div>

            <div className='flex flex-col gap-3 text-sm'>
                {rows.map((row) => (
                    <div
                        key={row.label}
                        className='flex justify-between text-gray-500'
                    >
                        <span>{row.label}</span>
                        <span className='font-medium text-gray-900'>
                            {row.value}
                        </span>
                    </div>
                ))}
            </div>

            <div className='border-t border-gray-100' />

            <div className='flex justify-between items-center'>
                <span className='font-bold text-gray-900'>Total</span>
                <span className='font-bold text-green-500 text-xl'>
                    ${total.toFixed(2)}
                </span>
            </div>

            <Button
                content={'Proceed to Checkout'}
                onClick={onCheckout}
                disabled={disabled}
                isPrimary={true}
            />

            <Button content={'Continue Shopping'} onClick={onBackToShop}/>
                
            <TrustBadges/>
        </div>
    );
}

export default CartSummary;
