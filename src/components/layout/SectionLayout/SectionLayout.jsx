function SectionLayout({ title, description, actionText, children,icon }) {
    return (
        <div className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-2xl font-bold text-dark'>
                            {title}
                        </h2>

                        <p className='text-gray-500 mt-2'>{description}</p>
                    </div>

                    {actionText && (
                        <button className='text-dark font-medium flex items-center gap-2 cursor-pointer'>
                            {actionText} {icon}
                        </button>
                    )}
                </div>
                <div className='mt-10'>{children}</div>
            </div>
        </div>
    );
}

export default SectionLayout;
