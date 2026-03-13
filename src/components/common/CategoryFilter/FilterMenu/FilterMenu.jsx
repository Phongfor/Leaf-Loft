import { FilterContext } from '@/contexts/FilterProvider';
import { useContext } from 'react';
import ButtonOption from '../ButtonOption/ButtonOption';

// FilterMenu.jsx
function FilterMenu() {
    const { brand, setBrand, price, setPrice, setCurrentPage } =
        useContext(FilterContext);

    const priceOptions = [
        { label: 'All', value: 'all' },
        { label: 'Under $50', value: 'under50' },
        { label: '$50 - $100', value: 'mid' },
        { label: 'Above $100', value: 'above100' }
    ];

    const brandOptions = [
        'Terra Studio',
        'Lumina Collective',
        'Soft Goods Co.'
    ];

    const handlePrice = (value) => {
        setPrice(value);
        setCurrentPage(0);
    };

    const handleBrand = (b) => {
        setBrand((prev) =>
            prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
        );
        setCurrentPage(0);
    };

    return (
        <div className='absolute right-full mr-3 top-0 w-64 bg-white border rounded-xl shadow-lg p-5 z-100'>
            {/* Price */}
            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Price</h3>
                <div className='flex flex-col gap-2 text-sm'>
                    {priceOptions.map(({ label, value }) => (
                        <ButtonOption
                            key={value}
                            type='radio'
                            id={`price-${value}`}
                            name='price'
                            value={value}
                            label={label}
                            checked={price === value}
                            onChange={() => handlePrice(value)}
                        />
                    ))}
                </div>
            </div>

            {/* Brand */}
            <div>
                <h3 className='font-semibold mb-2'>Brand</h3>
                <div className='flex flex-col gap-2 text-sm'>
                    {brandOptions.map((b) => {
                        const id = `brand-${b.replace(/\s+/g, '-').toLowerCase()}`;
                        return (
                            <ButtonOption
                                key={b}
                                type='checkbox'
                                id={id}
                                label={b}
                                checked={brand.includes(b)}
                                onChange={() => handleBrand(b)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FilterMenu;
