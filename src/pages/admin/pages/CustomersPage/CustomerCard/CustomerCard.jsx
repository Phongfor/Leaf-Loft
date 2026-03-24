function CustomerCard({ customer }) {
    return (
        <div className='bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center hover:shadow-md'>
            <div className='relative mb-3'>
                <img
                    src={customer.image}
                    className='w-16 h-16 rounded-full object-cover'
                />
                {customer.online && (
                    <span className='absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white' />
                )}
            </div>

            <p className='font-semibold text-sm'>{customer.name}</p>
            <p className='text-xs text-gray-400 mb-2'>{customer.email}</p>

            <span className='text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full mb-3'>
                💳 {customer.spent}
            </span>

            <button className='w-full bg-green-400 hover:bg-green-500 text-white text-xs font-bold py-2 rounded-xl'>
                View Profile
            </button>
        </div>
    );
}

export default CustomerCard;