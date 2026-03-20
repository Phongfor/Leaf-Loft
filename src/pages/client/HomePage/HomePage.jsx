import BestSellers from '@/pages/client/HomePage/components/BestSellers/BestSellers';
import FlashSale from '@/pages/client/HomePage/components/FlashSale/FlashSale';
import Category from '@components/common/Category/Category';
import FeatureProduct from '@/pages/client/HomePage/components/FeatureProduct/FeatureProduct';
import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import Hero from '@/pages/client/HomePage/components/Hero/Hero';
import JoinCommunity from '@/pages/client/HomePage/components/JoinCommunity/JoinCommunity';
import OurStory from '@/pages/client/HomePage/components/OurStory/OurStory';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Category />
            <FeatureProduct />
            <BestSellers />
            <FlashSale />
            <OurStory />
            <JoinCommunity />
            <Footer />
        </>
    );
}

export default HomePage;
