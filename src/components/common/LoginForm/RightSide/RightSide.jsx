import { motion } from 'framer-motion';
import Input from '@components/common/Input/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import Button from '@components/common/Button/Button';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { AuthContext } from '@/contexts/AuthProvider';
import { useContext } from 'react';
import { login } from '@/services/AuthService';
import { toast } from 'sonner';


function RightSide() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { openRegister, setUser, closeAuth,setUserRole } = useContext(AuthContext);

    const onSubmit = async (data) => {
        // try {
        //     const res = await login(data);

        //     setUser(res.data.result.userName);
        //     localStorage.setItem(
        //         'user',
        //         JSON.stringify(res.data.result.userName)
        //     );
        //     localStorage.setItem('accessToken', res.data.result.accessToken);
        //     localStorage.setItem('refreshToken', res.data.result.refreshToken);
        //     toast.success('Đăng nhập thành công!');
        //     closeAuth();
        // } catch (err) {
        //     toast.error(
        //         err?.response?.data?.message ??
        //             'Đăng nhập thất bại, thử lại sau'
        //     );
        // }
        const fakeUser = 'admin_test';
        const fakeRole = 'admin';

        setUser(fakeUser);
        setUserRole(fakeRole);
        localStorage.setItem('user', JSON.stringify(fakeUser));
        localStorage.setItem('userRole', fakeRole);

        toast.success('Đăng nhập thành công!');
        closeAuth();
    };

    return (
        <motion.div
            className='p-8'
            initial={{ x: -1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <h2 className='text-4xl font-bold mb-3 text-dark'>Welcome Back!</h2>

            <p className='text-gray-500 mb-8'>
                Good to see you again. Enter your details to access your
                account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <div className='relative mt-2'>
                    <FiMail className='absolute left-2 top-12 text-gray-400' />

                    <Input
                        label='Username'
                        type='text'
                        name='username'
                        placeholder='hello@example.com'
                        register={register}
                        error={errors.email}
                        isRequired
                    />
                </div>

                <div>
                    <div className='flex justify-end text-sm'>
                        <span className='text-lime-500 cursor-pointer hover:underline'>
                            Forgot password?
                        </span>
                    </div>

                    <div className='relative mt-2'>
                        <FiLock className='absolute left-2 top-12 text-gray-400' />

                        <Input
                            label={'Password'}
                            type='password'
                            name='password'
                            placeholder='.............'
                            register={register}
                            error={errors.password}
                            isRequired
                        />
                    </div>
                </div>

                <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <input type='checkbox' />
                    Remember me for 30 days
                </div>

                <Button
                    type='submit'
                    content={'Sign In'}
                    isPrimary={true}
                    className='w-full font-semibold shadow-lg'
                />

                <div className='flex items-center gap-3 text-gray-400 text-sm'>
                    <div className='flex-1 h-[1px] bg-gray-200'></div>
                    OR CONTINUE WITH
                    <div className='flex-1 h-[1px] bg-gray-200'></div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <button
                        type='button'
                        className='border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer'
                    >
                        <FaGoogle />
                        Google
                    </button>

                    <button
                        type='button'
                        className='border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer'
                    >
                        <FaApple className='text-2xl' />
                        Apple
                    </button>
                </div>

                <p className='text-center text-sm text-gray-500'>
                    Don't have an account?
                    <span
                        className='text-lime-500 ml-1 cursor-pointer hover:underline'
                        onClick={openRegister}
                    >
                        Create an account
                    </span>
                </p>
            </form>
        </motion.div>
    );
}

export default RightSide;
