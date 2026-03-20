const trendingItems = [
    {
        id: 1,
        name: 'Leather Craft Straps',
        price: 45,
        image: 'https://picsum.photos/seed/trend1/80/80',
    },
    {
        id: 2,
        name: 'Aero Classic Shades',
        price: 115,
        image: 'https://picsum.photos/seed/trend2/80/80',
    },
    {
        id: 3,
        name: 'Nova Table Lamp',
        price: 78,
        image: 'https://picsum.photos/seed/trend3/80/80',
    },
];

function TrendingNow() {
    return (
        <div className='bg-white rounded-2xl p-5 shadow-sm'>
            <div className='flex items-center gap-2 mb-4'>
                <span className='text-green-400 text-lg'>★</span>
                <h3 className='font-bold text-gray-900 text-sm'>Trending Now</h3>
            </div>

            <div className='flex flex-col gap-3'>
                {trendingItems.map((item) => (
                    <div
                        key={item.id}
                        className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-12 h-12 rounded-xl object-cover flex-shrink-0'
                        />
                        <div>
                            <p className='text-sm font-medium text-gray-900 leading-tight'>
                                {item.name}
                            </p>
                            <p className='text-sm font-bold text-green-500 mt-0.5'>
                                ${item.price}.00
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className='w-full mt-4 text-xs font-bold text-gray-500 hover:text-green-500 transition-colors py-2 border-t border-gray-100'>
                View All Trends
            </button>
        </div>
    );
}

export default TrendingNow;