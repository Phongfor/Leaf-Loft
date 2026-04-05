import { createContext, useEffect, useMemo, useState } from 'react';
import { getProductList } from '@/services/ProductService';
import Shopproducts from '@/components/common/ShopProductCard/contants';


export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [category, setCategory] = useState('All Items');
    const [brand, setBrand] = useState([]);
    const [price, setPrice] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);

    const loadProductList = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getProductList({ page: 0, size: 10, sortField : 'name', direction : 'ASC' });
            // console.log('API response:', response.data.result.content);
            setProductList(response.data.result?.content || []);
        } catch (err) {
            setError(err?.message || 'Lỗi khi tải sản phẩm');
            console.error('Load product error:', err?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProductList();
    }, []);

    // ── Filter logic ──────────────────────────────────
    const filteredProducts = useMemo(() => {
    return productList.filter((p) => {
        const matchCategory =
            category === 'All Items' || p.category === category;

        const matchBrand =
            brand.length === 0 || brand.includes(p.brand);

        const matchPrice =
            price === 'all' ||
            (price === 'under50' && p.minPrice < 50) ||
            (price === 'mid' && p.minPrice >= 50 && p.maxPrice <= 100) ||
            (price === 'above100' && p.minPrice > 100);

        return matchCategory && matchBrand && matchPrice;
    });
}, [productList, category, brand, price]);

    // ── Reset page khi filter thay đổi ────────────────
    useEffect(() => {
        setCurrentPage(0);
    }, [category, brand, price]);

    const values = {
        // Fetch
        productList,
        loading,
        error,
        loadProductList,
        // Filter
        category,
        setCategory,
        brand,
        setBrand,
        price,
        setPrice,
        currentPage,
        setCurrentPage,
        filteredProducts
    };

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    );
};
