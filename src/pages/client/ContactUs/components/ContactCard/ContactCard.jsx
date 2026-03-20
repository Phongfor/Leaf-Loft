function ContactCard({ icon, label, value, sub }) {
    return (
        <div className='bg-[#e8e8e2] rounded-2xl p-6'>
            <div className='w-10 h-10 rounded-xl bg-[#d4f5cf] flex items-center justify-center text-green-700 mb-4'>
                {icon}
            </div>
            <p className='text-[10px] tracking-[2px] text-gray-400 uppercase mb-1'>{label}</p>
            <p className='text-sm font-semibold text-gray-900 mb-1'>{value}</p>
            <p className='text-xs text-gray-400'>{sub}</p>
        </div>
    );
}

export default ContactCard;