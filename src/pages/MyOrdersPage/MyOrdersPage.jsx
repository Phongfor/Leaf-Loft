import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@contexts/AuthProvider';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

const STATUS_STYLE = {
    confirmed:  { label: 'Confirmed',  cls: 'bg-blue-100 text-blue-700' },
    processing: { label: 'Processing', cls: 'bg-yellow-100 text-yellow-700' },
    shipped:    { label: 'Shipped',    cls: 'bg-teal-100 text-teal-700' },
    delivered:  { label: 'Delivered',  cls: 'bg-green-100 text-green-700' },
};

function MyOrdersPage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const orders = JSON.parse(localStorage.getItem(`orders_${user}`) || '[]');

    return (
        <>
            <Header />
            <div className='min-h-screen bg-[#f0f2ef] pt-20 px-6 py-10'>
                <div className='max-w-3xl mx-auto'>
                    <h1 className='text-2xl font-bold text-gray-900 mb-6'>
                        My Orders
                        <span className='ml-2 text-sm font-normal text-gray-400'>
                            ({orders.length} orders)
                        </span>
                    </h1>

                    {orders.length === 0 ? (
                        <div className='bg-white rounded-2xl p-16 text-center'>
                            <p className='text-4xl mb-4'>📦</p>
                            <p className='font-semibold text-gray-700'>No orders yet</p>
                            <p className='text-sm text-gray-400 mt-1'>
                                Your order history will appear here
                            </p>
                            <button
                                onClick={() => navigate('/')}
                                className='mt-6 bg-gray-900 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-gray-700 transition-colors'
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            {orders.map((order) => {
                                const st = STATUS_STYLE[order.status] ?? STATUS_STYLE.confirmed;
                                const total = (
                                    order.subtotal +
                                    order.shippingCost +
                                    order.subtotal * 0.08
                                ).toFixed(2);

                                return (
                                    <div key={order.id} className='bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4'>
                                        {/* Header */}
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <p className='font-bold text-gray-900 text-sm'>{order.id}</p>
                                                <p className='text-xs text-gray-400 mt-0.5'>
                                                    {new Date(order.date).toLocaleDateString('en-US', {
                                                        year: 'numeric', month: 'long', day: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                            <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide ${st.cls}`}>
                                                {st.label}
                                            </span>
                                        </div>

                                        {/* Item thumbnails */}
                                        <div className='flex gap-2 flex-wrap'>
                                            {order.items.map((item) => (
                                                <img
                                                    key={`${item.id}-${item.color}-${item.size}`}
                                                    src={item.image}
                                                    alt={item.name}
                                                    className='w-14 h-14 rounded-lg object-cover bg-gray-100'
                                                />
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className='flex items-center justify-between border-t border-gray-100 pt-3'>
                                            <p className='text-sm text-gray-500'>
                                                {order.items.reduce((s, i) => s + i.quantity, 0)} items
                                                {order.shipping?.city && ` · ${order.shipping.city}`}
                                            </p>
                                            <p className='font-bold text-gray-900'>${total}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyOrdersPage;