function ValueCard({ icon, title, description }) {
    return (
        <div className='bg-white p-10 rounded-lg shadow-sm hover:shadow-lg hover:shadow-green-400/5 transition-all duration-300 group'>
            <div className='w-14 h-14 bg-green-400/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-green-400 transition-colors'>
                <span className='text-green-400 group-hover:text-gray-900 text-2xl transition-colors'>
                    {icon}
                </span>
            </div>
            <h3 className='text-xl font-bold mb-4 text-gray-900'>{title}</h3>
            <p className='text-gray-500 text-sm leading-relaxed'>{description}</p>
        </div>
    );
}

export default ValueCard;