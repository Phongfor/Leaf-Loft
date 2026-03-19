function AboutHero() {
    return (
        <section className='relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 px-6'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center'>

                {/* Left */}
                <div className='md:col-span-6 z-10'>
                    <div className='inline-block px-3 py-1 mb-6 rounded-full bg-green-400/10 text-gray-800 font-bold text-[10px] uppercase tracking-widest'>
                        Modern Living
                    </div>

                    <h1 className='text-5xl md:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-gray-900 mb-8'>
                        Crafting{' '}
                        <span className='italic text-green-400'>Modern</span>{' '}
                        Spaces
                    </h1>

                    <p className='text-lg text-gray-500 max-w-md leading-relaxed mb-10'>
                        We blend high-octane energy with disciplined minimalism
                        to transform your habitat into a statement of
                        personality.
                    </p>

                    <div className='relative w-24 h-24 mb-6'>
                        <svg
                            className='w-full h-full text-green-400 opacity-50 absolute -top-4 -left-4'
                            viewBox='0 0 100 100'
                        >
                            <path
                                d='M10,50 Q25,10 50,50 T90,50'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                            />
                        </svg>
                        <div className='w-full h-full border-2 border-dashed border-gray-300 rounded-xl rotate-6' />
                    </div>
                </div>

                {/* Right */}
                <div className='md:col-span-6 relative'>
                    <div className='aspect-[4/5] rounded-lg overflow-hidden shadow-2xl shadow-green-400/10'>
                        <img
                            src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80'
                            alt='Modern minimal living room'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-green-400 rounded-lg -z-10 rotate-12' />
                </div>

            </div>
        </section>
    );
}

export default AboutHero;