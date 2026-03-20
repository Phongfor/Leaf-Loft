import { useState } from 'react';
import { LuSearch, LuUserPlus } from 'react-icons/lu';

const customers = [
    { id: 1, name: 'Alex Rivera',  email: 'alex.r@vibe.com',   spent: '$4,240',  image: 'https://i.pravatar.cc/150?img=11', online: true },
    { id: 2, name: 'Sam Chen',     email: 'sam.c@vibe.com',    spent: '$890',    image: 'https://i.pravatar.cc/150?img=12', online: false },
    { id: 3, name: 'Jordan Smith', email: 'jordan.s@vibe.com', spent: '$12,100', image: 'https://i.pravatar.cc/150?img=13', online: false },
    { id: 4, name: 'Taylor Reed',  email: 'taylor.r@vibe.com', spent: '$450',    image: 'https://i.pravatar.cc/150?img=5',  online: false },
    { id: 5, name: 'Morgan Vane',  email: 'morgan.v@vibe.com', spent: '$3,670',  image: 'https://i.pravatar.cc/150?img=6',  online: false },
    { id: 6, name: 'Casey Bell',   email: 'casey.b@vibe.com',  spent: '$120',    image: 'https://i.pravatar.cc/150?img=7',  online: true },
    { id: 7, name: 'Riley Ford',   email: 'riley.f@vibe.com',  spent: '$980',    image: 'https://i.pravatar.cc/150?img=8',  online: false },
    { id: 8, name: 'Quinn Hart',   email: 'quinn.h@vibe.com',  spent: '$560',    image: 'https://i.pravatar.cc/150?img=9',  online: false },
];

function CustomersPage() {
    const [search, setSearch] = useState('');

    const filtered = customers.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='p-8 flex flex-col gap-6'>
            {/* Header */}
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-900'>Customer Directory</h2>
                    <p className='text-sm text-gray-400 mt-0.5'>
                        Analyze and manage 1,284 loyal customers
                    </p>
                </div>
                <button className='flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors'>
                    <LuUserPlus size={16} />
                    Add New Customer
                </button>
            </div>

            {/* Search */}
            <div className='flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm'>
                <LuSearch size={16} className='text-gray-400' />
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search by name, email, or order ID...'
                    className='flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent'
                />
                <kbd className='text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5'>⌘K</kbd>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {filtered.map((customer) => (
                    <div key={customer.id} className='bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow'>
                        <div className='relative mb-3'>
                            <img
                                src={customer.image}
                                alt={customer.name}
                                className='w-16 h-16 rounded-full object-cover'
                            />
                            {customer.online && (
                                <span className='absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white' />
                            )}
                        </div>
                        <p className='font-semibold text-gray-900 text-sm'>{customer.name}</p>
                        <p className='text-xs text-gray-400 mt-0.5 mb-2'>{customer.email}</p>
                        <span className='text-[11px] font-bold bg-green-50 text-green-600 px-2.5 py-1 rounded-full mb-3'>
                            💳 Spent: {customer.spent}
                        </span>
                        <button className='w-full bg-green-400 hover:bg-green-500 text-white text-xs font-bold py-2 rounded-xl transition-colors'>
                            View Profile
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-center gap-2'>
                {['‹', 1, 2, 3, '...', 12, '›'].map((p, i) => (
                    <button key={i} className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-colors
                        ${p === 1 ? 'bg-green-400 text-white font-bold' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                        {p}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CustomersPage;