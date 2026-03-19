import { useState } from 'react';
import ProductSize from '../../../components/common/ProductSize/ProductSize';
import ProductQuantity from '../../../components/common/ProductQuantity/ProductQuantity';
import ProductColor from '../../../components/common/ProductColor/ProductColor';
import Button from '@/components/common/Button/Button';

function ProductInfo({
    name,
    description,
    price,
    oldPrice,
    colors,
    sizes,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h1 className='text-3xl font-bold mt-3'>{name}</h1>

            {price ? (
                <div className='flex items-center gap-3 mt-3'>
                    <span className='text-2xl font-bold text-green-500'>${price}</span>
                    {oldPrice && (
                        <span className='line-through text-gray-400'>${oldPrice}</span>
                    )}
                </div>
            ) : (
                <p className='text-gray-400 mt-3'>Không có sản phẩm</p>
            )}

            <p className='text-gray-500 mt-4 leading-relaxed'>{description}</p>

            <ProductColor
                colors={colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />

            <div className='flex gap-6 mt-6'>
                <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
                <ProductSize
                    sizes={sizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
            </div>

            <Button content='Add to Cart' isPrimary className='w-full mt-6' />
            <Button content='Save to Wishlist' className='w-full mt-3' />
        </div>
    );
}

export default ProductInfo;