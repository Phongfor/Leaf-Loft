function OurStory() {
    return (
        <section className='bg-gray-50 py-24 md:py-32 px-6'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start'>

                {/* Left sticky label */}
                <div className='md:w-1/3  md:top-32'>
                    <h2 className='text-3xl font-extrabold tracking-tighter text-gray-900'>
                        Our Story
                    </h2>
                    <div className='w-16 h-1.5 bg-green-400 mt-4' />
                </div>

                {/* Right content */}
                <div className='md:w-2/3'>
                    <p className='text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-8'>
                        At{' '}
                        <span className='text-green-400'>Neon Moss</span>, we
                        believe your home should be as loud or as quiet as your
                        soul needs it to be.
                    </p>

                    <div className='space-y-6 text-gray-500 text-lg leading-relaxed max-w-2xl'>
                        <p>
                            Founded in a small workshop in 2021, we noticed a
                            void in the market: decor was either too safe and
                            beige, or too cluttered and overwhelming. We set out
                            to find the perfect middle ground—the "Playful
                            Brutalist" aesthetic.
                        </p>
                        <p>
                            Every piece we curate or design follows a strict
                            code of quality and an unapologetic commitment to
                            vibrance. We don't just sell objects; we provide the
                            accents that turn a house into a sanctuary of
                            self-expression.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OurStory;