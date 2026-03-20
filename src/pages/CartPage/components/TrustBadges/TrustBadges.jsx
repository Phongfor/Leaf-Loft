import { GrShieldSecurity } from 'react-icons/gr';
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';

const badges = [
    { icon: <GrShieldSecurity size={12} />, label: 'Secure' },
    { icon: <FaShippingFast size={12} />,   label: 'Fast' },
    { icon: <GiReturnArrow size={12} />,    label: 'Returns' },
];

function TrustBadges() {
    return (
        <div className='flex justify-center gap-5 pt-1'>
            {badges.map((b) => (
                <span
                    key={b.label}
                    className='flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-wide font-bold'
                >
                    {b.icon}
                    {b.label}
                </span>
            ))}
        </div>
    );
}

export default TrustBadges;