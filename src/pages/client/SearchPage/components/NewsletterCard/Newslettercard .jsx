import { useState } from 'react';

function NewsletterCard() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) setSubscribed(true);
    };

    return (
        <div className='bg-green-400 rounded-2xl p-5'>
            <h3 className='font-bold text-gray-900 text-sm leading-snug mb-1'>
                Get the latest drops first.
            </h3>
            <p className='text-xs text-gray-700 mb-4'>
                Join 10k+ tech enthusiasts and designers.
            </p>

            {subscribed ? (
                <p className='text-sm font-bold text-gray-900'>
                    Thanks for subscribing! 🎉
                </p>
            ) : (
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email address'
                        className='w-full px-3 py-2.5 rounded-xl text-sm outline-none border border-green-300 bg-green-50 placeholder:text-gray-400 focus:border-gray-900 transition-colors'
                    />
                    <button
                        type='submit'
                        className='w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors'
                    >
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
}

export default NewsletterCard;