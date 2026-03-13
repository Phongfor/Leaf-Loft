function RightContent() {
    return (
        <div>
            <span className='bg-dark text-white text-xs px-4 py-1 rounded-full tracking-widest'>
                OUR STORY
            </span>
            <h2 className='text-5xl font-bold mt-6 leading-tight text-dark'>
                Design for the <span className='text-lime-500'>Wildly</span>{' '}
                Creative.
            </h2>
            <p className='mt-6 text-gray-600 leading-relaxed'>
                We started in a small sun-drenched studio with a simple mission:
                to craft objects that spark joy in the mundane and beauty in the
                functional.
            </p>
            <p className='mt-4 text-gray-500 leading-relaxed'>
                Our process is rooted in playful experimentation and rigorous
                minimalism. Every piece in our collection is a testament to the
                idea that modern living doesn't have to be boring. We
                collaborate with independent creators to bring you essentials
                that are as unique as your own perspective.
            </p>

            <div className='flex gap-5 mt-10'>
                <div className="border-r-2 border-gray-300 pr-4">
                    <h3 className='text-3xl font-bold text-lime-500'>120+</h3>
                    <p className='text-gray-400 text-sm tracking-wide'>
                        ARTISANS
                    </p>
                </div>

                <div className="border-r-2 border-gray-300 pr-4">
                    <h3 className='text-3xl font-bold text-lime-500'>2018</h3>
                    <p className='text-gray-400 text-sm tracking-wide'>
                        FOUNDED
                    </p>
                </div>

                <div>
                    <h3 className='text-3xl font-bold text-lime-500'>15</h3>
                    <p className='text-gray-400 text-sm tracking-wide'>
                        CITIES
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
