import { useEffect, useState } from 'react';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ProductImage from './components/ProductImage/ProductImage';
import ProductInfo from './components/ProductInfo/ProductInfo';
import RelatedProducts from '@/components/common/RelatedProducts/RelatedProducts';
import relatedProducts from '@/components/common/RelatedProducts/contants';
import { getProductById } from '@/services/ProductService';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const { id } = useParams();

    const getVariant = (variants, colorName, sizeName) =>
        variants.find((v) => v.color.name === colorName && v.size === sizeName);

    const currentVariant =
        product && selectedColor && selectedSize
            ? getVariant(product.variants, selectedColor.name, selectedSize)
            : null;
    const currentPrice = currentVariant?.price ?? product?.minPrice;

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        const variant = getVariant(product.variants, color.name, selectedSize);
        if (variant?.image) setMainImage(variant.image);
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
        const variant = getVariant(product.variants, selectedColor?.name, size);
        if (variant?.image) setMainImage(variant.image);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductById(id);
                const product = res.data.result;
                setProduct(product);
                const firstVariant = product.variants[0];
                setSelectedColor(firstVariant.color);
                setSelectedSize(firstVariant.size);
                setMainImage(product.images[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    // Prevent render before data loads
    if (!product || !selectedColor || !selectedSize) {
        return (
            <>
                <Header />
                <div className='flex justify-center items-center min-h-screen'>
                    <p>Loading...</p>
                </div>
                <Footer />
            </>
        );
    }

    // Derive unique colors and sizes from variants
    const colors = [
        ...new Map(product.variants.map((v) => [v.color.id, v.color])).values()
    ];
    const sizes = [...new Set(product.variants.map((v) => v.size))];
    console.log(product);
    return (
        <>
            <Header />
            <div className='max-w-7xl mx-auto px-6 py-10 pt-40 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <ProductImage
                        images={product.images}
                        mainImage={mainImage.imageUrl}
                        setMainImage={setMainImage}
                    />
                    <ProductInfo
                        productId={product.id}
                        mainImage={mainImage}
                        name={product.name}
                        description={product.description}
                        price={currentPrice}
                        colors={colors}
                        sizes={sizes}
                        selectedColor={selectedColor}
                        productVariant={currentVariant}
                        setSelectedColor={handleSelectColor}
                        selectedSize={selectedSize}
                        setSelectedSize={handleSelectSize}
                    />
                </div>
                <RelatedProducts products={relatedProducts} />
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
