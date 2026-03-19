import TeamMember from "../TeamMember/TeamMember";


const team = [
    {
        image: 'https://i.pravatar.cc/150?img=11',
        name: 'Leo Moss',
        role: 'Creative Director',
    },
    {
        image: 'https://i.pravatar.cc/150?img=5',
        name: 'Sarah Vance',
        role: 'Lead Architect',
    },
    {
        image: 'https://i.pravatar.cc/150?img=12',
        name: 'Marcus Chen',
        role: 'Operations',
    },
];

function MeetTheTeam() {
    return (
        <section className='bg-white py-24 px-6'>
            <div className='max-w-5xl mx-auto border-t border-gray-200 pt-24'>
                <div className='text-center mb-16'>
                    <h2 className='text-2xl font-extrabold tracking-tighter text-gray-900'>
                        The Minds Behind the Moss
                    </h2>
                </div>

                <div className='flex flex-wrap justify-center gap-16'>
                    {team.map((member) => (
                        <TeamMember key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MeetTheTeam;