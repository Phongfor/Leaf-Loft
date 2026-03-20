import { useEffect, useState } from 'react';
import ProductCard from '../../../../components/common/ProductCard/ProductCard';
import TimeBox from './TimeBox/TimeBox';
import { IoIosFlash } from 'react-icons/io';
import useCountdown from '@/hooks/useCountDown';

function FlashSale() {
    const time = useCountdown(3);
    return (
        <section className='bg-[#071a2f] py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='bg-gradient-to-r from-[#0f2a4d] to-[#132d55] rounded-3xl p-12 flex justify-between items-center'>
                    <div className='text-white max-w-md'>
                        <div className='bg-primary text-xs py-1 w-35 rounded-full px-3 flex items-center justify-start'>
                            <IoIosFlash className='text-lg text-orange-300' />
                            <strong>FLASH SALE</strong>
                        </div>

                        <h2 className='text-4xl font-bold mt-6'>
                            Limited Time
                            <br />
                            <span className='text-primary'>Weekend Drop</span>
                        </h2>

                        <p className='text-gray-300 mt-4'>
                            Exclusive 40% off on selected items
                        </p>

                        <div className='flex gap-4 mt-8'>
                            <TimeBox value={time.hours} label='HOURS' />
                            <TimeBox value={time.minutes} label='MINS' />
                            <TimeBox value={time.seconds} label='SECS' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-6 w-[600px]'>
                        <div className='bg-[#233a59] p-4 rounded-2xl'>
                            <ProductCard
                                badge='-40%'
                                name='Neon Art Print'
                                price='$18.00'
                                oldPrice='$30.00'
                                image='https://images.unsplash.com/photo-1693329428271-3742bd8220cc?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                        </div>
                        <div className='bg-[#233a59] p-4 rounded-2xl'>
                            <ProductCard
                                badge='-25%'
                                name='Chrome Key Holder'
                                price='$15.00'
                                oldPrice='$20.00'
                                image='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlashSale;
