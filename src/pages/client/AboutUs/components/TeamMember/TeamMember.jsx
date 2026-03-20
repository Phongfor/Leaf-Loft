function TeamMember({ image, name, role }) {
    return (
        <div className='text-center group'>
            <div className='w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-transparent group-hover:border-green-400 shadow-xl'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover'
                />
            </div>
            <h4 className='font-bold text-gray-900'>{name}</h4>
            <p className='text-xs text-gray-400 uppercase tracking-widest font-bold mt-1'>
                {role}
            </p>
        </div>
    );
}

export default TeamMember;