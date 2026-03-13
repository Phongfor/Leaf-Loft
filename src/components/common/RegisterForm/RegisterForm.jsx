import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthProvider';

import LeftSide from '../LoginForm/LeftSide/LeftSide';
import RightSide from '../LoginForm/RightSide/RightSide';
import RightContent from './RightContent/RightContent';
import LeftImage from './LeftImage/LeftImage';

function RegisterForm() {
    const { authMode } = useContext(AuthContext);
    const isLogin = authMode === 'login';

    return (
        <div className='flex items-center justify-center rounded-2xl'>
            <div className='relative w-[760px] h-[680px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-2'>

                <AnimatePresence mode="wait">

                    {/* LEFT PANEL */}
                    <motion.div
                        key={`left-${authMode}`}
                        className='absolute w-1/2 h-full'
                        initial={{ x: isLogin ? "-100%" : "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: isLogin ? "100%" : "-100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        {isLogin ? <LeftSide /> : <RightContent />}
                    </motion.div>

                    {/* RIGHT PANEL */}
                    <motion.div
                        key={`right-${authMode}`}
                        className='absolute w-1/2 h-full right-0'
                        initial={{ x: isLogin ? "100%" : "-100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: isLogin ? "-100%" : "100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        {isLogin ? <RightSide /> : <LeftImage />}
                    </motion.div>

                </AnimatePresence>

            </div>
        </div>
    );
}

export default RegisterForm;