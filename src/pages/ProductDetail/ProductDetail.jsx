import { useState } from 'react';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ProductImage from './ProductImage/ProductImage';
import productDetail from './contants';
import ProductInfo from './ProductInfo/ProductInfo';
import RelatedProducts from '@/components/common/RelatedProducts/RelatedProducts';
import relatedProducts from '@/components/common/RelatedProducts/contants';

function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState(productDetail.colors[0]);
    const [selectedSize, setSelectedSize] = useState(productDetail.sizes[0]);
    const [mainImage, setMainImage] = useState(productDetail.images[0]);

    const getVariant = (variants, colorName, sizeName) =>
        variants.find((v) => v.color === colorName && v.size === sizeName);

    // Derive price from current variant (fallback to base price)
    const currentVariant = getVariant(
        productDetail.variants,
        selectedColor.name,
        selectedSize
    );
    const currentPrice = currentVariant?.price ?? productDetail.price;

    console.log(currentPrice);

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        const variant = getVariant(
            productDetail.variants,
            color.name,
            selectedSize
        );
        if (variant?.image) setMainImage(variant.image);
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
        const variant = getVariant(
            productDetail.variants,
            selectedColor.name,
            size
        );
        if (variant?.image) setMainImage(variant.image);
    };

    return (
        <>
            <Header />
            <div className='max-w-7xl mx-auto px-6 py-10 pt-40 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <ProductImage
                        images={productDetail.images}
                        mainImage={mainImage}
                        setMainImage={setMainImage}
                    />
                    <ProductInfo
                        productId={productDetail.id} 
                        mainImage={mainImage}
                        name={productDetail.name}
                        description={productDetail.description}
                        price={currentPrice} // ✅ variant-aware price
                        colors={productDetail.colors}
                        sizes={productDetail.sizes}
                        selectedColor={selectedColor}
                        setSelectedColor={handleSelectColor}
                        selectedSize={selectedSize}
                        setSelectedSize={handleSelectSize} // ✅ also updates image
                    />
                </div>
                <RelatedProducts products={relatedProducts} />
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
