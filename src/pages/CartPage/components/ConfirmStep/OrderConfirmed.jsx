import { GrShieldSecurity } from 'react-icons/gr';
import { MdMarkEmailRead } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import Button from '@/components/common/Button/Button';

const deliverySymbol = [
    {
        icon: <GrShieldSecurity />,
        label: 'Estimated delivery',
        value: '3–5 business days'
    },
    {
        icon: <MdMarkEmailRead />,
        label: 'Confirmation sent to',
        value: 'your email'
    },
    { icon: <GiReturnArrow />, label: 'Returns', value: 'Free within 30 days' }
];

function OrderConfirmed({ name, city, onBackToHome}) {
    return (
        <div className='flex flex-col items-center justify-center py-24 text-center'>
            <div className='relative mb-8'>
                <div className='w-24 h-24 rounded-full bg-green-400 flex items-center justify-center'>
                    <svg
                        width='44'
                        height='44'
                        fill='none'
                        stroke='white'
                        strokeWidth='2.5'
                        viewBox='0 0 24 24'
                    >
                        <polyline points='20,6 9,17 4,12' />
                    </svg>
                </div>
                <div className='absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-sm'>
                    🎉
                </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                Order Confirmed!
            </h2>
            <p className='text-gray-500 text-lg mb-1'>
                Thank you,{' '}
                <span className='font-semibold text-gray-800'>{name}</span>!
            </p>
            <p className='text-sm text-gray-400 max-w-xs'>
                Your order has been placed and will be shipped to{' '}
                <span className='font-medium text-gray-600'>{city}</span>.
                You'll receive a confirmation email shortly.
            </p>

            {/* Details card */}
            <div className='mt-8 bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm text-left flex flex-col gap-3'>
                {deliverySymbol.map((row) => (
                    <div key={row.label} className='flex items-center gap-3'>
                        <span className='text-xl w-8 text-center'>
                            {row.icon}
                        </span>
                        <div>
                            <p className='text-xs text-gray-400'>{row.label}</p>
                            <p className='text-sm font-medium text-gray-800'>
                                {row.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Button
                content={'Continue Shopping'}
                isPrimary
                onClick={onBackToHome}
                className='mt-8 bg-gray-900 hover:bg-gray-700 text-white font-bold px-10 py-3.5 rounded-xl transition-colors text-sm'
            />
        </div>
    );
}

export default OrderConfirmed;
