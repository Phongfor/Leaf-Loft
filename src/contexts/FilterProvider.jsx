import { createContext, useMemo, useState } from 'react';
import Shopproducts from '@/components/common/ShopProductCard/contants';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState('All Items');
    const [brand, setBrand] = useState([]);
    const [price, setPrice] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);

    const filteredProducts = useMemo(() => {
        return Shopproducts.filter((p) => {
            const matchCategory = category === 'All Items' || p.category === category;

            const matchBrand = brand.length === 0 || brand.includes(p.brand);

            const matchPrice =
                price === 'all' ||
                (price === 'under50' && p.price < 50) ||
                (price === 'mid' && p.price >= 50 && p.price <= 100) ||
                (price === 'above100' && p.price > 100);

            return matchCategory && matchBrand && matchPrice;
        });
    }, [category, brand, price]);

    const values = {
        category, setCategory,
        brand, setBrand,
        price, setPrice,
        currentPage, setCurrentPage,
        filteredProducts,
    };

    return (
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    );
};