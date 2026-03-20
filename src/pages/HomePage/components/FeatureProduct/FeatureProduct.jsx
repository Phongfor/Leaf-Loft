import ProductList from '../../../../components/common/ProductList/ProductList';
import SectionLayout from '@/components/layout/SectionLayout/SectionLayout';
import { FaArrowRight } from 'react-icons/fa';

function FeatureProduct() {
    return (
        <section>
            <SectionLayout
                title='Featured Products'
                description='Our best-selling items this week'
                actionText='View all'
                icon={<FaArrowRight />}
            >
                <ProductList />
            </SectionLayout>
        </section>
    );
}

export default FeatureProduct;
