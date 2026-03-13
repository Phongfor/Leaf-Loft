import { PiHeartLight } from 'react-icons/pi';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';

function WhislistSideBar() {
    return (
        <>
            <HeaderSideBar
                icon={<PiHeartLight size={26} />}
                title={'WHISLIST'}
            />
            <ItemProduct />
            <div className='absolute bottom-0 w-full px-6 pb-6'>
                <div className='flex justify-between py-6 border-b text-sm tracking-wide'>
                    <span>SUBTOTAL :</span>
                    <span>$239.98</span>
                </div>

                <div className='flex flex-col gap-3 mt-6'>
                    <Button content={'VIEW WHISLIST'} isPrimary={true} />

                    <Button content={'CHECKOUT'} />
                </div>
            </div>
        </>
    );
}

export default WhislistSideBar;
