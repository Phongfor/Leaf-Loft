import { LuSearch, LuBell } from 'react-icons/lu';

function AdminHeader({ title, subtitle }) {
    return (
        <header className='flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100'>
            <div>
                <h1 className='text-xl font-bold text-gray-900'>{title}</h1>
                {subtitle && <p className='text-xs text-gray-400 mt-0.5'>{subtitle}</p>}
            </div>

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-52'>
                    <LuSearch size={14} className='text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search data...'
                        className='bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400 w-full'
                    />
                </div>

                <button className='relative w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'>
                    <LuBell size={16} className='text-gray-600' />
                    <span className='absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full' />
                </button>

                <div className='flex items-center gap-2'>
                    <div className='text-right'>
                        <p className='text-xs font-semibold text-gray-900'>Alex Manager</p>
                        <p className='text-[10px] text-gray-400'>Super Admin</p>
                    </div>
                    <div className='w-9 h-9 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold'>
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;