import ValueCard from "../ValueCard/ValueCard";

const values = [
    {
        icon: '🌿',
        title: 'Sustainability',
        description:
            'Ethically sourced materials and small-batch production to ensure minimal environmental footprint without compromising on style.',
    },
    {
        icon: '🔨',
        title: 'Craftsmanship',
        description:
            'Precision engineering meets artisanal finishes. Every edge, curve, and texture is intentionally designed for longevity.',
    },
    {
        icon: '😄',
        title: 'Playfulness',
        description:
            "Design shouldn't be a chore. We inject a sense of humor and high-energy color into every corner of your home.",
    },
];

function OurValues() {
    return (
        <section className='py-24 md:py-32 px-6'>
            <div className='max-w-7xl mx-auto text-center mb-16'>
                <h2 className='text-4xl font-extrabold tracking-tighter text-gray-900'>
                    The DNA of Neon Moss
                </h2>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                {values.map((v) => (
                    <ValueCard key={v.title} {...v} />
                ))}
            </div>
        </section>
    );
}

export default OurValues;