import { useForm } from 'react-hook-form';
import { FaShippingFast } from 'react-icons/fa';
import { BsBox2Fill } from 'react-icons/bs';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';

const deliveryMethods = [
    {
        id: 'express',
        icon: <FaShippingFast />,
        label: 'Express Delivery',
        sub: '1–2 Business Days',
        display: '$12.00',
    },
    {
        id: 'standard',
        icon: <BsBox2Fill />,
        label: 'Standard Ground',
        sub: '4–7 Business Days',
        display: 'Free',
    },
];

function ShippingForm({ onSubmit, onBack }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ defaultValues: { delivery: 'express' } });

    const selectedDelivery = watch('delivery');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'>
                <button
                    type='button'
                    onClick={onBack}
                    className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0'
                >
                    <svg width='14' height='14' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                        <polyline points='15,18 9,12 15,6' />
                    </svg>
                </button>
                <h2 className='text-2xl font-bold text-gray-900'>
                    Shipping Information
                </h2>
            </div>

            {/* Name */}
            <div className='grid grid-cols-2 gap-4'>
                <Input
                    label='First Name'
                    name='firstName'
                    placeholder='Alex'
                    register={register}
                    rules={{ required: 'First name is required' }}
                    error={errors.firstName}
                    isRequired
                />
                <Input
                    label='Last Name'
                    name='lastName'
                    placeholder='Rivers'
                    register={register}
                    rules={{ required: 'Last name is required' }}
                    error={errors.lastName}
                    isRequired
                />
            </div>

            {/* Street */}
            <Input
                label='Street Address'
                name='street'
                placeholder='123 Creative Lane'
                register={register}
                rules={{ required: 'Street address is required' }}
                error={errors.street}
                isRequired
            />

            {/* City + Postal */}
            <div className='grid grid-cols-2 gap-4'>
                <Input
                    label='City'
                    name='city'
                    placeholder='Designopolis'
                    register={register}
                    rules={{ required: 'City is required' }}
                    error={errors.city}
                    isRequired
                />
                <Input
                    label='Postal Code'
                    name='postal'
                    placeholder='90210'
                    register={register}
                    rules={{ required: 'Postal code is required' }}
                    error={errors.postal}
                    isRequired
                />
            </div>

            {/* Delivery method */}
            <div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    Delivery Method
                </h3>
                <div className='grid grid-cols-2 gap-3'>
                    {deliveryMethods.map((method) => {
                        const isSelected = selectedDelivery === method.id;
                        return (
                            <label
                                key={method.id}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                                    ${isSelected
                                        ? 'border-green-400 bg-green-50'
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type='radio'
                                    value={method.id}
                                    {...register('delivery')}
                                    className='hidden'
                                />
                                <div className='flex items-center gap-3'>
                                    <span className='text-lg'>{method.icon}</span>
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>{method.label}</p>
                                        <p className='text-xs text-gray-400'>{method.sub}</p>
                                    </div>
                                </div>
                                <span className={`text-sm font-bold ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {method.display}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>

            <Button content='Confirm Shipping' isPrimary={false} type='submit' />
        </form>
    );
}

export default ShippingForm;