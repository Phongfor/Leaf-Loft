import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { Pagination } from 'swiper/modules';
import Shopproducts from '@/components/common/ShopProductCard/contants';
import SearchBar from './components/SearchBar/Searchbar ';
import FilterTabs from './components/FilterTabs/FilterTabs';
import TrendingNow from './components/TrendingNow/TrendingNow';
import NewsletterCard from './components/NewsletterCard/Newslettercard ';
import ShopProductCard from '@/components/common/ShopProductCard/ShopProductCard';

const SORT_OPTIONS = [
    'Relevance',
    'Price: Low to High',
    'Price: High to Low',
    'Newest'
];
const PAGE_SIZE = 6;

function SearchPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';

    const [activeFilter, setActiveFilter] = useState('All Results');
    const [sortBy, setSortBy] = useState('Relevance');
    const [page, setPage] = useState(1);

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const keyword = query.toLowerCase();
        let filtered = Shopproducts.filter(
            (p) =>
                p.name.toLowerCase().includes(keyword) ||
                p.category.toLowerCase().includes(keyword)
        );

        if (activeFilter !== 'All Results') {
            filtered = filtered.filter((p) =>
                p.category.toLowerCase().includes(activeFilter.toLowerCase())
            );
        }

        if (sortBy === 'Price: Low to High')
            filtered.sort((a, b) => a.price - b.price);
        if (sortBy === 'Price: High to Low')
            filtered.sort((a, b) => b.price - a.price);

        return filtered;
    }, [query, activeFilter, sortBy]);

    const totalPages = Math.ceil(results.length / PAGE_SIZE);
    const paginated = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const handleSearch = (newQuery) => {
        navigate(`/search?q=${encodeURIComponent(newQuery)}`);
        setPage(1);
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setPage(1);
    };

    return (
        <>
            <Header />
            <div className='min-h-screen bg-[#f0f2ef] pt-20'>
                {/* Search bar */}
                <div className='bg-white border-b border-gray-100 px-6 py-6'>
                    <SearchBar query={query} onSearch={handleSearch} />
                </div>

                {/* Filter tabs */}
                <div className='bg-white border-b border-gray-100 px-6 py-3'>
                    <div className='max-w-6xl mx-auto'>
                        <FilterTabs
                            active={activeFilter}
                            onChange={handleFilterChange}
                        />
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 py-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start'>
                        {/* Left: results */}
                        <div>
                            {/* Result count + sort */}
                            <div className='flex items-center justify-between mb-6'>
                                <p className='text-sm font-semibold text-gray-700'>
                                    Showing{' '}
                                    <span className='text-gray-900'>
                                        {results.length}
                                    </span>{' '}
                                    results
                                    {query && (
                                        <span className='text-gray-400 font-normal'>
                                            {' '}
                                            for "{query}"
                                        </span>
                                    )}
                                </p>

                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                    <span>Sort by:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => {
                                            setSortBy(e.target.value);
                                            setPage(1);
                                        }}
                                        className='font-semibold text-gray-900 outline-none bg-transparent cursor-pointer'
                                    >
                                        {SORT_OPTIONS.map((o) => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Grid */}
                            {paginated.length === 0 ? (
                                <div className='bg-white rounded-2xl p-16 text-center'>
                                    <p className='text-4xl mb-4'>🔍</p>
                                    <p className='font-semibold text-gray-700'>
                                        No products found
                                    </p>
                                    <p className='text-sm text-gray-400 mt-1'>
                                        Try different keywords or filters
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                                        {paginated.map((p) => (
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
                                    </div>

                                    {totalPages > 1 && (
                                        <Pagination
                                            pageCount={totalPages}
                                            currentPage={page}
                                            onPageChange={(selected) =>
                                                setPage(selected)
                                            }
                                        />
                                    )}
                                </>
                            )}
                        </div>

                        {/* Right: sidebar */}
                        <div className='flex flex-col gap-4 sticky top-24'>
                            <TrendingNow />
                            <NewsletterCard />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SearchPage;
