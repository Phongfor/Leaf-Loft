import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, currentPage, onPageChange }) {
    const handlePageClick = (event) => {
        onPageChange(event.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ReactPaginate
            breakLabel='...'
            nextLabel='Next'
            previousLabel='Prev'
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            containerClassName='flex justify-center items-center gap-2 mt-12'
            pageClassName='w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer'
            activeClassName='bg-green-500 text-white border-green-500'
            previousClassName='px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-100'
            nextClassName='px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-100'
            breakClassName='px-2'
        />
    );
}

export default Pagination;