import products from '../../../pages/client/HomePage/components/FeatureProduct/contants';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-10'>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    badge={product.badge}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default ProductList;
