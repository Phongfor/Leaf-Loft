import { useContext } from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import { SideBarContext } from '@contexts/SideBarProvider';

function CartSidebar() {
    const { cart, removeFromCart } = useContext(SideBarContext);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className='flex flex-col h-full'>
            <HeaderSideBar
                icon={<PiShoppingCartLight size={26} />}
                title='CART'
            />

            <div className='flex-1 overflow-y-auto'>
                {cart.length === 0 ? (
                    <p className='text-center text-gray-400 mt-10'>Giỏ hàng trống</p>
                ) : (
                    cart.map((item) => (
                        <ItemProduct
                            key={`${item.id}-${item.color}-${item.size}`}
                            image={item.image}
                            name={item.name}
                            size={item.size}
                            color={item.color}
                            quantity={item.quantity}
                            price={item.price}
                            onRemove={() => removeFromCart(item.id, item.color, item.size)}
                        />
                    ))
                )}
            </div>

            <div className='p-6 border-t bg-white'>
                <div className='flex justify-between mb-6 text-sm'>
                    <span>SUBTOTAL :</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <Button content='VIEW CART' isPrimary />
                    <Button content='CHECKOUT' />
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;