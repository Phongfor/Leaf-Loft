import Button from '../../../../components/common/Button/Button';
import Input from '../../../../components/common/Input/Input';

function JoinCommunity() {
    return (
        <section className='flex justify-center py-20 bg-gray-100 mt-20'>
            <div className='relative bg-lime-500 w-[1100px] rounded-[40px] py-16 px-10 text-center overflow-hidden'>
                <div className='absolute -top-10 -left-10 w-40 h-40 border-[20px] border-lime-400 rounded-full opacity-40'></div>
                <div className='absolute -top-6 -left-6 w-32 h-32 border-[14px] border-lime-300 rounded-full opacity-40'></div>

                <div className='absolute -bottom-10 -right-6 text-lime-400 opacity-40 text-[160px]'>
                    ★
                </div>

                <h2 className='text-4xl font-bold text-dark mb-4'>
                    Join the Community
                </h2>

                <p className='text-dark/80 max-w-xl mx-auto mb-8'>
                    Get early access to new drops, exclusive offers, and design
                    insights from our team.
                </p>

                <div className='flex justify-center gap-4'>
                    <Input
                        type={'email'}
                        placeHolder={'Enter your email'}
                        className='bg-lime-300/40 w-[320px]'
                    />
                    <Button content={'Sign up'} />
                </div>
            </div>
        </section>
    );
}

export default JoinCommunity;
