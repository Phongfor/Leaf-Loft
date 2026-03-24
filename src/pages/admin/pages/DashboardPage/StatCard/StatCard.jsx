function StatCard({ icon, label, value, change }) {
    return (
        <div className='bg-white rounded-2xl p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-3'>
                <div
                    className={'w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center'}
                >
                    {icon}
                </div>
                {change && (
                    <span className='text-xs font-bold text-green-500'>
                        {change}
                    </span>
                )}
            </div>
            <p className='text-xs text-gray-400 mb-1'>{label}</p>
            <p className='text-2xl font-bold text-gray-900'>{value}</p>
        </div>
    );
}

export default StatCard;
