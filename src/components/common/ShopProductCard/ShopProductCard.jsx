import { FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';
import ActBar from '../ActBar/ActBar';
import { useNavigate } from 'react-router-dom';
import ProductSize from '../ProductSize/ProductSize';
import ProductColor from '../ProductColor/ProductColor';

function ShopProductCard({ name, image, badge, brand, price, sizes, colors }) {
    const [selectedSize, setSelectedSize] = useState(sizes?.[0] || '');
    const [selectedColor, setSelectedColor] = useState(colors?.[0] || {});
    const navigate = useNavigate();

    return (
        <div className='group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden w-full'>
            {/* image */}
            <div className='relative'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-56 object-cover cursor-pointer'
                    onClick={() => navigate('/detailproduct')}
                />
                {badge && (
                    <span className='absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded'>
                        {badge}
                    </span>
                )}
                <ActBar />
            </div>

            {/* content */}
            <div className='p-4'>
                <p className='text-xs text-gray-400 uppercase tracking-wide'>{brand}</p>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='font-semibold text-gray-800'>{name}</h3>
                    <span className='text-green-500 font-bold'>${price}</span>
                </div>

                {sizes && (
                    <ProductSize
                        sizes={sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                )}

                {colors && (
                    <ProductColor
                        colors={colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />
                )}

                <button className='mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition'>
                    <FiShoppingCart />
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ShopProductCard;