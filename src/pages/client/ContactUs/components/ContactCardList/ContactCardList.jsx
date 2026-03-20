
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { LiaHomeSolid } from 'react-icons/lia';
import ContactCard from '../ContactCard/ContactCard';

const cards = [
    {
        icon: <MdOutlineEmail size={20} />,
        label: 'EMAIL US',
        value: 'concierge@decorly.com',
        sub: 'Available 24/7 for you.',
    },
    {
        icon: <LuPhone size={20} />,
        label: 'CALL US',
        value: '+1 (888) DECORLY',
        sub: 'Mon–Fri, 9am – 6pm EST',
    },
    {
        icon: <LiaHomeSolid size={20} />,
        label: 'VISIT STUDIO',
        value: '42 Design District, NY',
        sub: 'Experience the quality in person.',
    },
];

function ContactCardList() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {cards.map((card) => (
                <ContactCard key={card.label} {...card} />
            ))}
        </div>
    );
}

export default ContactCardList;