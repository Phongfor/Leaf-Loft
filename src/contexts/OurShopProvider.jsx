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

        setProductList(Shopproducts)
        // setLoading(true);
        // setError(null);
        // try {
        //     const response = await getProductList({ page: 0, size: 10, sort: ['name,asc'] });
        //     console.log('API response:', response.data);
        //     setProductList(response.data?.result?.content || []);
        // } catch (err) {
        //     setError(err?.message || 'Lỗi khi tải sản phẩm');
        //     console.error('Load product error:', err?.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        loadProductList();
    }, []);

    // ── Filter logic ──────────────────────────────────
    const filteredProducts = useMemo(() => {
        return productList.filter((p) => {
            const matchCategory =
                category === 'All Items' || p.category === category;
            const matchBrand = brand.length === 0 || brand.includes(p.brand);
            const matchPrice =
                price === 'all' ||
                (price === 'under50' && p.price < 50) ||
                (price === 'mid' && p.price >= 50 && p.price <= 100) ||
                (price === 'above100' && p.price > 100);

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
