import { LuSearch } from 'react-icons/lu';

function SearchBar({ value, onChange }) {
    return (
        <div className='flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm'>
            <LuSearch size={16} className='text-gray-400' />
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='Search by name or email...'
                className='flex-1 outline-none text-sm text-gray-700 bg-transparent'
            />
        </div>
    );
}

export default SearchBar;