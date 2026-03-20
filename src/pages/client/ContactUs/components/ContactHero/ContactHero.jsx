import FeaturedImage from "../FeaturedImage/FeaturedImage";


function ContactHero() {
    return (
        <div>
            <div className='mb-6'>
                <h1 className='font-serif text-6xl font-bold leading-none text-gray-900'>
                    Say
                </h1>
                <h1 className='font-serif text-6xl font-bold leading-none italic text-green-400'>
                    Hello
                </h1>
            </div>

            <p className='text-gray-500 text-sm leading-relaxed max-w-[260px] mb-7'>
                Need help picking the right piece? Our design experts are ready
                to transform your vision into reality.
            </p>

            <FeaturedImage />
        </div>
    );
}

export default ContactHero;
