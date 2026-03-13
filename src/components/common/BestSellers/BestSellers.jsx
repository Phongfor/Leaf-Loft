import SectionLayout from '@/components/layout/SectionLayout/SectionLayout';
import ProductList from '../ProductList/ProductList';
import { FaArrowRight } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

function BestSellers() {
    return (
        <section className='bg-third relative'>
            <SectionLayout
                title='Best Sellers'
                description='trending apparel for the creative soul'
                actionText='View all'
                icon={<FaArrowRight />}
            >
                <ProductList />
            </SectionLayout>
            <div className='absolute w-20 h-20 rounded-full bg-second-dark top-20 -left-2 opacity-20'></div>
            <FaRegStar className='absolute w-20 h-20 top-1/2 right-30 opacity-30 rotate-45' />
        </section>
    );
}

export default BestSellers;
