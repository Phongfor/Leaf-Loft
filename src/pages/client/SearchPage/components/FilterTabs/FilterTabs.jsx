const filters = ['All Results', 'New Arrival', 'On Sale', 'Tech', 'Home Office', 'Minimalist'];

function FilterTabs({ active, onChange }) {
    return (
        <div className='flex items-center gap-2 flex-wrap'>
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => onChange(f)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                        ${active === f
                            ? 'bg-green-400 text-white'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300'
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}

export default FilterTabs;