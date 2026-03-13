import { FiSend, FiGlobe, FiShare2, FiVolume2 } from "react-icons/fi";
import InputFooter from "./InputFooter/InputFooter";
import logo from '@assets/Images/logo.png';


function Footer() {
    return (
        <footer className='bg-gray-100 mt-16'>
            <div className='max-w-7xl mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                    <div>
                        <img src={logo} alt='logo' className='w-35' />

                        <p className='text-gray-500 text-sm leading-relaxed'>
                            Making your everyday spaces more vibrant with
                            curated playful designs and minimalist aesthetics.
                        </p>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Shop</h3>
                        <ul className='space-y-2 text-gray-500 text-sm'>
                            <li className='hover:text-dark cursor-pointer'>
                                New Arrivals
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                Best Sellers
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                Sale
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                Gift Cards
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Support</h3>
                        <ul className='space-y-2 text-gray-500 text-sm'>
                            <li className='hover:text-dark cursor-pointer'>
                                Shipping Policy
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                Returns & Exchanges
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                Contact Us
                            </li>
                            <li className='hover:text-dark cursor-pointer'>
                                FAQs
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-2'>Newsletter</h3>
                        <p className='text-gray-500 text-sm mb-4'>
                            Join our playful community.
                        </p>

                        <div className='flex items-center bg-gray-200 rounded-full overflow-hidden'>
                          <InputFooter type={'text'} placeHolder={'Your email'}/>

                            <button className='bg-primary p-2 rounded-full mr-1 hover:bg-second'>
                                <FiSend className='text-white' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className='border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
                    <p>© 2024 PlayfulShop. All rights reserved.</p>

                    <div className='flex gap-5 mt-4 md:mt-0'>
                        <FiVolume2 className='cursor-pointer hover:text-black' />
                        <FiGlobe className='cursor-pointer hover:text-black' />
                        <FiShare2 className='cursor-pointer hover:text-black' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
