import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import { cartItems, products } from '../components/ItemProduct/constans';
import { useMemo } from 'react';

function CartSidebar() {
    const productMap = Object.fromEntries(products.map((p) => [p.id, p]));

    const cartProducts = cartItems.map((item) => ({
        ...productMap[item.productId], 
        quantity: item.quantity
    }));
    return (
        <div className='flex flex-col h-full'>
            <HeaderSideBar
                icon={<PiShoppingCartLight size={26} />}
                title={'CART'}
            />

            <div className='flex-1 overflow-y-auto'>
                {cartProducts.map((item) => (
                    <ItemProduct
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        size={item.size}
                        quantity={item.quantity}
                        price={item.price}
                        sku={item.sku}
                    />
                ))}
            </div>

            <div className='p-6 border-t bg-white'>
                <div className='flex justify-between mb-6 text-sm'>
                    <span>SUBTOTAL :</span>
                    <span>$239.98</span>
                </div>

                <div className='flex flex-col gap-3'>
                    <Button content={'VIEW CART'} isPrimary={true} />
                    <Button content={'CHECKOUT'} />
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;
