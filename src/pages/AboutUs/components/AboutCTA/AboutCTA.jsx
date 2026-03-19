function AboutCTA() {
    return (
        <section className='py-24 px-6 overflow-hidden'>
            <div className='max-w-7xl mx-auto bg-gray-900 rounded-lg p-12 md:p-24 relative'>

                {/* Background decoration */}
                <div className='absolute top-0 right-0 w-1/3 h-full bg-green-400/20 -skew-x-12 transform translate-x-12' />

                <div className='relative z-10 max-w-2xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-none mb-10'>
                        Join the{' '}
                        <span className='italic text-green-400'>movement</span>.
                    </h2>

                    <p className='text-gray-400 text-lg mb-12 max-w-md'>
                        Your space is a canvas. Let's paint it with bold
                        intentions and vibrant energy.
                    </p>

                    <a
                        href='#'
                        className='inline-flex items-center gap-3 bg-green-400 text-gray-900 font-bold px-8 py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-lg shadow-green-400/20'
                    >
                        Shop Collection
                        <svg
                            width='18'
                            height='18'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2.5'
                            viewBox='0 0 24 24'
                        >
                            <line x1='5' y1='12' x2='19' y2='12' />
                            <polyline points='12,5 19,12 12,19' />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default AboutCTA;