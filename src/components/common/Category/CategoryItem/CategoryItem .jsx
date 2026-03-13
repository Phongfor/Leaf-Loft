function CategoryItem({ icon: Icon, title }) {
    return (
        <div className='flex flex-col items-center gap-3'>
            <div className='w-35 h-35 bg-white rounded-full flex items-center justify-center cursor-pointer'>
                <Icon className='text-4xl text-gray-500' />
            </div>

            <p className='text-sm font-semibold'>{title}</p>
        </div>
    );
}

export default CategoryItem;
