import { motion } from 'framer-motion';

function LeftSide() {
    return (
        <motion.div
            className='bg-lime-100 flex flex-col items-center justify-center p-10 text-center'
            initial={{ x: 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <motion.img
                src='src/assets/Images/loginIllustration.svg'
                alt=''
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
            />

            <h3 className='text-xl font-semibold text-dark mb-2'>
                Secure and Fun
            </h3>

            <p className='text-gray-500 max-w-xs'>
                Your security is our priority, but we like to keep things
                bright.
            </p>
        </motion.div>
    );
}

export default LeftSide;
