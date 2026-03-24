import { useState } from 'react';
import InventoryHeader from './InventoryHeader/InventoryHeader';
import ProductTable from './ProductTable/ProductTable';
import Pagination from '@/components/common/Pagination/Pagination';
import { products } from './constants';


const ITEMS_PER_PAGE = 5;

function InventoryPage() {
    const [items, setItems] = useState(products);
    const [currentPage, setCurrentPage] = useState(0);

    const handleDelete = (id) => {
        const newItems = items.filter((p) => p.id !== id);
        setItems(newItems);

        const newPageCount = Math.ceil(newItems.length / ITEMS_PER_PAGE);
        if (currentPage >= newPageCount) {
            setCurrentPage(newPageCount - 1);
        }
    };

    
    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = items.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='p-8'>
            <InventoryHeader />

            <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
                <ProductTable
                    items={currentItems}   
                    onDelete={handleDelete}
                />

                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default InventoryPage;