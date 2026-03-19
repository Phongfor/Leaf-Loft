import { useContext } from 'react';
import { PiHeartLight } from 'react-icons/pi';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';
import { SideBarContext } from '@contexts/SideBarProvider';

function WishlistSidebar() {
    const { wishlist, removeFromWishlist } = useContext(SideBarContext);

    const subtotal = wishlist.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='flex flex-col h-full'>
            <HeaderSideBar
                icon={<PiHeartLight size={26} />}
                title='WISHLIST'
            />

            <div className='flex-1 overflow-y-auto'>
                {wishlist.length === 0 ? (
                    <p className='text-center text-gray-400 mt-10'>Chưa có sản phẩm yêu thích</p>
                ) : (
                    wishlist.map((item) => (
                        <ItemProduct
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            onRemove={() => removeFromWishlist(item.id)}
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
                    <Button content='VIEW WISHLIST' isPrimary />
                    <Button content='CHECKOUT' />
                </div>
            </div>
        </div>
    );
}

export default WishlistSidebar;