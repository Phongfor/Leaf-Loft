import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuArrowRight, LuCheck } from 'react-icons/lu';
import FormField from '../FormField/FormField';


const inputClass =
    'w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none focus:border-green-400 transition-colors';

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [sent, setSent] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSent(true);
        reset();
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div className='bg-white rounded-2xl p-8 shadow-sm'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                Drop us a line
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <FormField label='Full Name'>
                    <input
                        {...register('name', { required: true })}
                        placeholder='Enter your name'
                        className={`${inputClass} ${errors.name ? 'border-red-300' : ''}`}
                    />
                </FormField>

                <FormField label='Email Address'>
                    <input
                        {...register('email', { required: true })}
                        type='email'
                        placeholder='hello@example.com'
                        className={`${inputClass} ${errors.email ? 'border-red-300' : ''}`}
                    />
                </FormField>

                <FormField label='Subject'>
                    <select
                        {...register('subject')}
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option>Order Inquiry</option>
                        <option>Design Consultation</option>
                        <option>Returns & Exchanges</option>
                        <option>General Question</option>
                    </select>
                </FormField>

                <FormField label='Message'>
                    <textarea
                        {...register('message', { required: true })}
                        placeholder='Tell us how we can help...'
                        rows={4}
                        className={`${inputClass} resize-none ${errors.message ? 'border-red-300' : ''}`}
                    />
                </FormField>

                <button
                    type='submit'
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all
                        ${
                            sent
                                ? 'bg-green-500 text-white'
                                : 'bg-green-400 text-gray-900 hover:bg-green-500'
                        }`}
                >
                    {sent ? (
                        <>
                            <LuCheck size={16} />
                            Message Sent!
                        </>
                    ) : (
                        <>
                            Send Message
                            <LuArrowRight size={16} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
