import { useState, useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import StepIndicator from './components/StepIndicator';
import CartList from './components/CartStep/CartList';
import CartSummary from './components/CartStep/CartSummary';
import ShippingForm from './components/CheckoutStep/ShippingForm';
import CheckoutSummary from './components/CheckoutStep/CheckoutSummary';
import OrderConfirmed from './components/ConfirmStep/OrderConfirmed';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { AuthContext } from '@/contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SHIPPING_COSTS = { express: 12, standard: 0 };

function CartPage() {
    const { cart, addToCart, removeFromCart, decreaseQuantity, setCart } =
        useContext(SideBarContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [shippingData, setShippingData] = useState(null);
    const [shippingCost, setShippingCost] = useState(12);

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleShippingSubmit = (data) => {
        setShippingData(data);
        setShippingCost(SHIPPING_COSTS[data.delivery] ?? 12);
    };

    const handlePlaceOrder = () => {
        const newOrder = {
            id: `LL-${Date.now()}`,
            date: new Date().toISOString(),
            items: cart,
            shipping: shippingData,
            shippingCost,
            subtotal: cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            ),
            status: 'shipped'
        };

        const existing = JSON.parse(
            localStorage.getItem(`orders_${user}`) || '[]'
        );
        localStorage.setItem(
            `orders_${user}`,
            JSON.stringify([newOrder, ...existing])
        );

        setCart([]);
        localStorage.removeItem('cart');
        setStep(3);
    };

    return (
        <>
            <Header />
            <div className='min-h-screen bg-[#f0f2ef] pt-20'>
                <StepIndicator
                    currentStep={step}
                    onStepClick={(number) => setStep(number)}
                />

                <div className='max-w-5xl mx-auto px-6 py-10'>
                    {/* ── STEP 1: CART ── */}
                    {step === 1 && (
                        <div className='grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start'>
                            <div>
                                <h1 className='text-2xl font-bold text-gray-900 mb-6'>
                                    Shopping Cart
                                    <span className='ml-2 text-sm font-normal text-gray-400'>
                                        ({cart.length} items)
                                    </span>
                                </h1>
                                <CartList
                                    items={cart}
                                    onIncrease={(item) =>
                                        addToCart({ ...item, quantity: 1 })
                                    }
                                    onDecrease={(item) =>
                                        decreaseQuantity(
                                            item.id,
                                            item.color,
                                            item.size
                                        )
                                    }
                                    onRemove={(item) =>
                                        removeFromCart(
                                            item.id,
                                            item.color,
                                            item.size
                                        )
                                    }
                                />
                            </div>
                            <CartSummary
                                subtotal={subtotal}
                                onCheckout={() => setStep(2)}
                                disabled={cart.length === 0}
                                onBackToShop={()=>navigate('/shop')}
                            />
                        </div>
                    )}

                    {/* ── STEP 2: CHECKOUT ── */}
                    {step === 2 && (
                        <div className='grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start'>
                            <ShippingForm
                                onSubmit={handleShippingSubmit}
                                onBack={() => setStep(1)}
                            />
                            <CheckoutSummary
                                cart={cart}
                                shippingCost={shippingCost}
                                onPlaceOrder={handlePlaceOrder}
                                disablePlaceOrder={!shippingData}
                            />
                        </div>
                    )}

                    {/* ── STEP 3: CONFIRMED ── */}
                    {step === 3 && (
                        <OrderConfirmed
                            name={shippingData?.firstName}
                            city={shippingData?.city}
                            onBackToHome={() => navigate('/shop')}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CartPage;
