function PromoCard() {
    return (
        <div className='bg-green-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center'>
            <div className='w-20 h-20 rounded-full bg-yellow-200 mb-4 flex items-center justify-center text-4xl'>
                🧑‍💼
            </div>

            <h3 className='font-bold text-gray-900 text-lg mb-2'>
                Keep it up, Alex!
            </h3>

            <p className='text-xs text-gray-700 mb-4'>
                Your shop performance is 15% better than last month.
            </p>

            <button className='bg-gray-900 text-white text-xs px-4 py-2 rounded-xl'>
                VIEW STRATEGY
            </button>
        </div>
    );
}

export default PromoCard;