import { useState, useEffect } from 'react';
import Shopproducts from '@/components/common/ShopProductCard/contants';

const DEBOUNCE_MS = 350;

function useSearch(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);

        const timer = setTimeout(() => {
            // ── TODO: khi có backend, thay đoạn này bằng: ──
            // const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
            // const data = await res.json();
            // setResults(data.result ?? []);

            const keyword = query.toLowerCase();
            const filtered = Shopproducts.filter(
                (p) =>
                    p.name.toLowerCase().includes(keyword) ||
                    p.category.toLowerCase().includes(keyword)
            );
            setResults(filtered);
            setLoading(false);
        }, DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [query]);

    return { results, loading };
}

export default useSearch;