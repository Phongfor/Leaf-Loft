import LoginForm from '@components/common/LoginForm/LoginForm';
import RegisterForm from '@components/common/RegisterForm/RegisterForm';
import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthProvider';
import { AnimatePresence,motion } from 'framer-motion';

function AuthModal() {
    const { authMode, closeAuth } = useContext(AuthContext);

    if (!authMode) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            {/* Overlay */}
            <div
                className='absolute inset-0 bg-black/40'
                onClick={closeAuth}
            ></div>

            <div className='relative z-10'>
                <AnimatePresence mode='wait'>
                    {authMode === 'login' && (
                        <motion.div
                            key='login'
                        >
                            <LoginForm />
                        </motion.div>
                    )}
                    {authMode === 'register' && (
                        <motion.div
                            key='register'
                           
                        >
                            <RegisterForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default AuthModal;
