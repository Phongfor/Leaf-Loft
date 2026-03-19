import ShopProductCard from '../ShopProductCard/ShopProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RelatedProducts({ products }) {
    return (
        <div className='mt-16'>
            {/* TITLE */}
            <div className='text-center mb-10'>
                <h2 className='text-3xl font-bold'>
                    You might also{' '}
                    <span className='text-green-500 italic'>love</span>
                </h2>
                <p className='text-gray-400 mt-2'>
                    Curated pieces that complement your aesthetic
                </p>
            </div>

            {/* SWIPER */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                navigation
                autoplay={{ delay: 3000 }}
                loop={products.length > 4}
                observer={true}
                observeParents={true}
                onSwiper={(swiper) => {
                    setTimeout(() => swiper.update(), 100);
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }
                }}
            >
                {products.map((p, index) => (
                    <SwiperSlide key={index}>
                        <ShopProductCard
                            name={p.name}
                            image={p.image}
                            badge={p.badge}
                            price={p.price}
                            sizes={p.sizes}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default RelatedProducts;
