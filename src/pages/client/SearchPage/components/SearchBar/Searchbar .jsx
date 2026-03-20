import { IoIosSearch } from 'react-icons/io';

function SearchBar({ query, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value.trim();
        if (value) onSearch(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-center gap-3 bg-white border-2 border-green-400 rounded-full px-5 py-3 w-full max-w-2xl mx-auto shadow-sm'
        >
            <IoIosSearch className='text-green-400 text-xl flex-shrink-0' />
            <input
                name='search'
                type='text'
                defaultValue={query}
                placeholder='Search products...'
                className='flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-400 bg-transparent'
            />
            <button
                type='submit'
                className='bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors flex-shrink-0'
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;