import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { LuX } from 'react-icons/lu';

import useSearch from '@/hooks/useSearch';
import SearchResultItem from './SearchResultItem/SearchResultItem';

function SearchMenu() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { results, loading } = useSearch(query);
    const navigate = useNavigate();
    const wrapperRef = useRef(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
            setQuery('');
        }
        if (e.key === 'Escape') setIsOpen(false);
    };

    const handleSelectItem = (item) => {
        navigate(`/product/${item.id}`);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div ref={wrapperRef} className='relative'>
            {/* Input — giữ nguyên UI cũ */}
            <div className='flex items-center gap-2 border rounded-full px-4 h-10 w-64 bg-gray-100'>
                <IoIosSearch className='text-gray-500 text-xl flex-shrink-0' />
                <input
                    type='text'
                    value={query}
                    placeholder='Search products...'
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    className='bg-transparent outline-none w-full text-sm'
                />
                {query && (
                    <button
                        onClick={() => {
                            setQuery('');
                            setIsOpen(false);
                        }}
                    >
                        <LuX
                            size={14}
                            className='text-gray-400 hover:text-gray-600'
                        />
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {isOpen && query.trim() && (
                <div className='absolute top-full mt-2 left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50'>
                    {loading ? (
                        <p className='px-4 py-6 text-center text-sm text-gray-400'>
                            Searching...
                        </p>
                    ) : results.length > 0 ? (
                        <>
                            <div className='divide-y divide-gray-50'>
                                {results.slice(0, 5).map((item) => (
                                    <SearchResultItem
                                        key={item.id}
                                        {...item}
                                        onClick={() => handleSelectItem(item)}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => {
                                    navigate(
                                        `/search?q=${encodeURIComponent(query.trim())}`
                                    );
                                    setIsOpen(false);
                                }}
                                className='w-full px-4 py-3 text-xs font-bold text-green-600 hover:bg-gray-50 transition-colors text-center border-t border-gray-100'
                            >
                                See all results for "{query}"
                            </button>
                        </>
                    ) : (
                        <p className='px-4 py-6 text-center text-sm text-gray-400'>
                            No results for "{query}"
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchMenu;
