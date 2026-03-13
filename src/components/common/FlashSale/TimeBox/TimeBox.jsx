function TimeBox({ value, label }) {
    return (
        <div className='bg-[#233a59] px-6 py-4 rounded-lg text-center'>
            <p className='text-2xl font-bold'>
                {String(value).padStart(2, '0')}
            </p>
            <p className='text-xs text-gray-400 mt-1'>{label}</p>
        </div>
    );
}

export default TimeBox;
