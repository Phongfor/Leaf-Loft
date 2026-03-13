import BestSellers from '@/components/common/BestSellers/BestSellers';
import FlashSale from '@/components/common/FlashSale/FlashSale';
import Category from '@components/common/Category/Category';
import FeatureProduct from '@components/common/FeatureProduct/FeatureProduct';
import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import Hero from '@components/common/Hero/Hero';
import JoinCommunity from '@components/common/JoinCommunity/JoinCommunity';
import OurStory from '@components/common/OurStory/OurStory';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Category />
            <FeatureProduct />
            <BestSellers/>
            <FlashSale/>
            <OurStory />
            <JoinCommunity />
            <Footer />
        </>
    );
}

export default HomePage;
