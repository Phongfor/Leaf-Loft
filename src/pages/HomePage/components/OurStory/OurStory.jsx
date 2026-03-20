import LeftImage from './LeftImage/LeftImage';
import RightContent from './RightContent/RightContent';
import { FaStar } from 'react-icons/fa';

function OurStory() {
    return (
        <section className='py-24 bg-gray-50'>
            <div className=' relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
                <LeftImage />
                <RightContent />
                <div className='absolute top-15 right-70 w-25 h-25 border-10 border-lime-300 rounded-full opacity-40 z-0'></div>
                <FaStar className='absolute bottom-[-70px] left-20 text-[#94A3B8] text-[120px] opacity-40 z-0' />
            </div>
        </section>
    );
}

export default OurStory;
