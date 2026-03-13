import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '@components/common/Input/Input';
import { AuthContext } from '@/contexts/AuthProvider';
import { FaPencilAlt } from "react-icons/fa";


function RightContent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const { openLogin } = useContext(AuthContext);
    const password = watch('password');

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='relative w-full p-8'>
            <h2 className='text-2xl font-bold mb-1'>
                JOIN THE <span className='text-lime-500'>REVOLUTION</span>
            </h2>

            <p className='text-gray-500 mb-5 text-xs'>
                Start your journey with us today.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                <div className='flex gap-3'>
                    <Input
                        label='First Name'
                        name='firstName'
                        placeholder='John'
                        register={register}
                        error={errors.firstName}
                        rules={{ required: 'First name required' }}
                        isRequired
                    />

                    <Input
                        label='Last Name'
                        name='lastName'
                        placeholder='Doe'
                        register={register}
                        error={errors.lastName}
                        rules={{ required: 'Last name required' }}
                        isRequired
                    />
                </div>

                <Input
                    label='Username'
                    name='username'
                    placeholder='johndoe_123'
                    register={register}
                    error={errors.username}
                    rules={{ required: 'Username required' }}
                    isRequired
                />

                <Input
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    register={register}
                    error={errors.password}
                    rules={{
                        required: 'Password required',
                        minLength: {
                            value: 8,
                            message: 'Minimum 8 characters'
                        }
                    }}
                    isRequired
                />

                <Input
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm password'
                    register={register}
                    error={errors.confirmPassword}
                    rules={{
                        required: 'Confirm password',
                        validate: (value) =>
                            value === password || 'Passwords do not match'
                    }}
                    isRequired
                />

                <div className='flex gap-3'>
                    <Input
                        label='Date of Birth'
                        type='date'
                        name='dob'
                        register={register}
                        error={errors.dob}
                        rules={{ required: 'Date of birth required' }}
                        isRequired
                    />

                    <Input
                        label='City'
                        name='city'
                        placeholder='New York'
                        register={register}
                        error={errors.city}
                        rules={{ required: 'City required' }}
                        isRequired
                    />
                </div>

                <button
                    type='submit'
                    className='w-full bg-lime-500 hover:bg-lime-600 text-dark font-semibold py-2.5 rounded-lg transition mt-3 text-sm'
                >
                    CREATE ACCOUNT
                </button>

                <p className='text-xs text-gray-500 text-center pt-2'>
                    Already have an account?
                    <span
                        onClick={openLogin}
                        className='text-lime-500 cursor-pointer ml-1 font-medium'
                    >
                        Login
                    </span>
                </p>
            </form>
            <FaPencilAlt className='absolute text-4xl text-second-light top-24 right-2 pointer-events-none'/>
        </div>
    );
}

export default RightContent;
