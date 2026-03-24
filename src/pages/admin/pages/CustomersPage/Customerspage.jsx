import { useState } from 'react';
import CustomersHeader from './CustomersHeader/CustomersHeader';
import CustomerGrid from './CustomerGrid/CustomerGrid';
import Pagination from '@/components/common/Pagination/Pagination';
import SearchBar from './SearchBar/SearchBar';
import { customers } from './data';


const ITEMS_PER_PAGE = 8;

function CustomersPage() {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    // 🔍 filter
    const filtered = customers.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    // 📄 pagination
    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = filtered.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    return (
        <div className='p-8 flex flex-col gap-6'>
            <CustomersHeader />

            <SearchBar value={search} onChange={setSearch} />

            <CustomerGrid customers={currentItems} />

            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default CustomersPage;