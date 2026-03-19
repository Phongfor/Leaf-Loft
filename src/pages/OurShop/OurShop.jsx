import CategoryFilter from '@/components/common/CategoryFilter/CategoryFilter';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ShopHeader from '@/components/common/ShopHeader/ShopHeader';
import ShopProductCard from '@/components/common/ShopProductCard/ShopProductCard';
import GridLayout from '@/components/layout/GridLayout/GridLayout';
import { OurShopContext } from '@/contexts/OurShopProvider';

import { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 8;

function OurShop() {
    const { filteredProducts, currentPage, setCurrentPage } =
        useContext(OurShopContext);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentProducts = filteredProducts.slice(
        offset,
        offset + ITEMS_PER_PAGE
    );
    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    console.log(currentProducts)

    return (
        <>
            <Header />
            <ShopHeader />
            <CategoryFilter />
            <GridLayout>
                {currentProducts.map((p) => (
                    <ShopProductCard
                        name={p.name}
                        image={p.image}
                        badge={p.badge}
                        price={p.price}
                        sizes={p.sizes}
                        colors={p.colors}
                    />
                ))}
            </GridLayout>
            <ReactPaginate
                breakLabel='...'
                nextLabel='Next'
                previousLabel='Prev'
                onPageChange={handlePageClick}
                pageCount={pageCount}
                forcePage={currentPage} 
                containerClassName='flex justify-center items-center gap-2 mt-12'
                pageClassName='w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer'
                activeClassName='bg-green-500 text-white border-green-500'
                previousClassName='px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-100'
                nextClassName='px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-100'
                breakClassName='px-2'
            />
            <Footer />
        </>
    );
}

export default OurShop;
