import { useContext, useState } from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import FilterMenu from './FilterMenu/FilterMenu';
import { OurShopContext } from '@contexts/OurShopProvider';

function CategoryFilter() {
    const {
        category,
        setCategory,
        setCurrentPage,
        brand,
        setBrand,
        price,
        setPrice
    } = useContext(OurShopContext);
    const [openFilter, setOpenFilter] = useState(false);

    const categories = [
        'All Items',
        'Vases',
        'Lamps',
        'Cushions',
        'Art Prints',
        'Mirrors'
    ];

    const handleBrand = (b) => {
        setBrand((prev) =>
            prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
        );
        setCurrentPage(0);
    };

    const handlePrice = (val) => {
        setPrice(val);
        setCurrentPage(0);
    };

    return (
        <div className='max-w-7xl mx-auto px-6 my-8'>
            <div className='flex justify-between items-center'>
                {/* categories */}
                <div className='flex gap-3 flex-wrap'>
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => {
                                setCategory(c);
                                setCurrentPage(0);
                            }}
                            className={`px-5 py-2 rounded-full text-sm transition
                                ${category === c ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* filter button */}
                <div className='relative'>
                    <button
                        onClick={() => setOpenFilter(!openFilter)}
                        className='flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100'
                    >
                        <TbAdjustmentsHorizontal />
                        Filters
                    </button>

                    {openFilter && 
                       <FilterMenu/>
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoryFilter;
