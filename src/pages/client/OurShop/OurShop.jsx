import CategoryFilter from '@/components/common/CategoryFilter/CategoryFilter';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ShopHeader from '@/components/common/ShopHeader/ShopHeader';
import ShopProductCard from '@/components/common/ShopProductCard/ShopProductCard';
import GridLayout from '@/components/layout/GridLayout/GridLayout';
import Pagination from '@/components/common/Pagination/Pagination'; // ✅
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext } from 'react';

const ITEMS_PER_PAGE = 8;

function OurShop() {
    const { filteredProducts, currentPage, setCurrentPage } =
        useContext(OurShopContext);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentProducts = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    return (
        <>
            <Header />
            <ShopHeader />
            <CategoryFilter />
            <GridLayout>
                {currentProducts.map((p) => (
                    <ShopProductCard
                        key={p.id}
                        name={p.name}
                        id={p.id}
                        image={p.image}
                        badge={p.badge}
                        price={p.price}
                        sizes={p.sizes}
                        colors={p.colors}
                    />
                ))}
            </GridLayout>
            <Pagination                              
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <Footer />
        </>
    );
}

export default OurShop;