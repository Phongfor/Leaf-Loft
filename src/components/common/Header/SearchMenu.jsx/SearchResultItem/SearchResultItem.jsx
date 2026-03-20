function SearchResultItem({ image, name, price, onClick }) {
    return (
        <div
            onClick={onClick}
            className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors'
        >
            <img
                src={image}
                alt={name}
                className='w-10 h-10 rounded-lg object-cover bg-gray-100 flex-shrink-0'
            />
            <p className='flex-1 text-sm font-medium text-gray-900 truncate'>
                {name}
            </p>
            <span className='text-sm font-semibold text-green-500'>
                ${price}
            </span>
        </div>
    );
}

export default SearchResultItem;
