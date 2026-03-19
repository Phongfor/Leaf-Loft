import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import products from '@components/common/ShopProductCard/contants';
import { OurShopContext } from '@contexts/OurShopProvider';

const ITEMS_PER_PAGE = 8;

function Pagination() {
    const { category, currentPage, setCurrentPage } = useContext(OurShopContext);

    const filteredProducts = products.filter((p) => {
        if (category === 'All Items') return true;
        return p.category === category;
    });

    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <ReactPaginate
            breakLabel='...'
            nextLabel='Next'
            previousLabel='Prev'
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName='flex justify-center items-center gap-2 mt-10'
            pageClassName='w-10 h-10 flex items-center justify-center border rounded-lg'
            activeClassName='bg-green-500 text-white border-green-500'
            previousClassName='px-3 py-2 border rounded-lg'
            nextClassName='px-3 py-2 border rounded-lg'
        />
    );
}

export default Pagination;
