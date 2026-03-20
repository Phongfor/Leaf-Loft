import Button from '@/components/common/Button/Button';
import { useState } from 'react';
import { GrShieldSecurity } from 'react-icons/gr';

const TAX_RATE = 0.08;
const PROMO_MAP = { HELLO20: 0.2, SAVE10: 0.1 };

function CheckoutSummary({
    cart,
    shippingCost,
    onPlaceOrder,
    disablePlaceOrder
}) {
    const [promoCode, setPromoCode] = useState('');
    const [promoError, setPromoError] = useState('');
    const [discount, setDiscount] = useState(0);
    const [appliedCode, setAppliedCode] = useState('');

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const discountAmount = +(subtotal * discount).toFixed(2);
    const total = +(subtotal + shippingCost + tax - discountAmount).toFixed(2);

    const handleApplyPromo = () => {
        const rate = PROMO_MAP[promoCode.toUpperCase()];
        if (rate) {
            setDiscount(rate);
            setAppliedCode(promoCode.toUpperCase());
            setPromoError('');
        } else {
            setPromoError('Invalid promo code');
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            {/* Summary card */}
            <div className='bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5'>
                <h2 className='text-lg font-bold text-gray-900'>
                    Order Summary
                </h2>

                {/* Cart items */}
                <div className='flex flex-col gap-3 max-h-48 overflow-y-auto'>
                    {cart.map((item) => (
                        <div
                            key={`${item.id}-${item.color}-${item.size}`}
                            className='flex items-center gap-3'
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100'
                            />
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-semibold text-gray-900 truncate'>
                                    {item.name}
                                </p>
                                <p className='text-xs text-gray-400'>
                                    {[item.color, item.size]
                                        .filter(Boolean)
                                        .join(' • ')}{' '}
                                    × {item.quantity}
                                </p>
                            </div>
                            <span className='text-sm font-bold text-gray-900 flex-shrink-0'>
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>

                <div className='border-t border-gray-100' />

                {/* Totals */}
                <div className='flex flex-col gap-2 text-sm'>
                    <div className='flex justify-between text-gray-500'>
                        <span>Subtotal</span>
                        <span className='text-gray-900 font-medium'>
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>
                    <div className='flex justify-between text-gray-500'>
                        <span>Shipping</span>
                        <span
                            className={
                                shippingCost === 0
                                    ? 'text-green-500 font-bold'
                                    : 'text-gray-900 font-medium'
                            }
                        >
                            {shippingCost === 0
                                ? 'Free'
                                : `$${shippingCost.toFixed(2)}`}
                        </span>
                    </div>
                    {discountAmount > 0 && (
                        <div className='flex justify-between text-green-500'>
                            <span>Promo ({appliedCode})</span>
                            <span>−${discountAmount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className='flex justify-between text-gray-500'>
                        <span>Tax</span>
                        <span className='text-gray-900 font-medium'>
                            ${tax.toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className='border-t border-gray-100' />

                <div className='flex justify-between items-center'>
                    <span className='font-bold text-gray-900'>Total</span>
                    <span className='font-bold text-gray-900 text-xl'>
                        ${total.toFixed(2)}
                    </span>
                </div>

                <Button
                    content={'Place Order'}
                    onClick={onPlaceOrder}
                    disabled={disablePlaceOrder}
                    className='disabled:opacity-40 disabled:cursor-not-allowed py-3.5 rounded-xl'
                    isPrimary={false}
                />

                <p className='flex items-center justify-center gap-1 text-[10px] text-gray-400'>
                    <GrShieldSecurity size={12} />
                    Secure encrypted checkout
                </p>
            </div>

            {/* Promo code card */}
            <div className='bg-green-50 border border-green-100 rounded-2xl p-5'>
                <p className='text-sm font-semibold text-gray-700 mb-3'>
                    Promo Code?
                </p>
                <div className='flex gap-2'>
                    <input
                        value={promoCode}
                        onChange={(e) => {
                            setPromoCode(e.target.value);
                            setPromoError('');
                        }}
                        placeholder='e.g. HELLO20'
                        disabled={!!appliedCode}
                        className='flex-1 px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-green-400 transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-400'
                    />
                    <Button
                        content={appliedCode ? '✓' : 'Apply'}
                        isPrimary={false}
                        onClick={handleApplyPromo}
                        disabled={!!appliedCode}
                    />
                </div>
                {promoError && (
                    <p className='text-xs text-red-400 mt-2'>{promoError}</p>
                )}
                {appliedCode && (
                    <p className='text-xs text-green-600 font-medium mt-2'>
                        {Math.round(discount * 100)}% discount applied!
                    </p>
                )}
            </div>
        </div>
    );
}

export default CheckoutSummary;
