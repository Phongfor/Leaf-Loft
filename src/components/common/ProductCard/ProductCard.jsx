import ActBar from '../ActBar/ActBar';

function ProductCard({ badge, image, name, price, oldPrice }) {
    return (
        <div className='group bg-white p-4 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1'>
            <div className='relative h-64 rounded-xl overflow-hidden'>
                {badge && (
                    <span className='absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10'>
                        {badge}
                    </span>
                )}

                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                />
                <ActBar />
            </div>

            <h3 className='mt-4 text-lg font-semibold text-gray-800'>{name}</h3>

            <div className='flex items-center gap-2 mt-1'>
                <p className='text-green-600 font-semibold'>{price}</p>

                {oldPrice && (
                    <p className='text-gray-400 line-through text-sm'>
                        {oldPrice}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
