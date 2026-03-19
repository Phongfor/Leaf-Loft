const avatars = [
    'https://i.pravatar.cc/40?img=1',
    'https://i.pravatar.cc/40?img=2',
    'https://i.pravatar.cc/40?img=3',
];

function CommonQuestions() {
    return (
        <div className='rounded-3xl bg-gradient-to-br from-[#1a3a1a] to-[#0d2a0d] px-10 py-8 flex items-center justify-between gap-6'>

            {/* Left */}
            <div className='max-w-sm'>
                <h3 className='text-white text-xl font-bold mb-2'>
                    Common Questions
                </h3>
                <p className='text-green-200/60 text-sm leading-relaxed'>
                    Wondering about shipping timelines, our return policy, or
                    trade discounts? We might have already answered your
                    question.
                </p>
            </div>

            {/* Right */}
            <div className='flex items-center gap-4 flex-shrink-0'>
                {/* Avatars */}
                <div className='flex items-center'>
                    {avatars.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt='avatar'
                            className='w-9 h-9 rounded-full border-2 border-[#1a3a1a] object-cover'
                            style={{ marginLeft: i === 0 ? 0 : -10 }}
                        />
                    ))}
                </div>

                {/* Button */}
                <button className='bg-green-400 hover:bg-green-300 text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap'>
                    Explore FAQs
                </button>
            </div>

        </div>
    );
}

export default CommonQuestions;