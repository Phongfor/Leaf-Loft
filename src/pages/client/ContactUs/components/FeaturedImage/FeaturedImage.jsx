function FeaturedImage() {
    return (
        <div className='rounded-2xl overflow-hidden relative aspect-[4/3] max-w-[300px]'>
            <img
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80'
                alt='Featured Interior'
                className='w-full h-full object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-8 pb-4'>
                <p className='text-white/70 text-[10px] tracking-[2px] uppercase mb-1'>
                    Featured Interior
                </p>
                <p className='text-white text-sm font-semibold'>The Nordic Collection</p>
            </div>
        </div>
    );
}

export default FeaturedImage;