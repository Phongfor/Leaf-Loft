import { useEffect, useRef, useState } from 'react';

function useScrollHeader() {
    const [showHeader, setShowHeader] = useState(true);
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current <= 0) {
                setShowHeader(true);
            } else if (current > lastScroll.current) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            lastScroll.current = current;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return showHeader;
}

export default useScrollHeader;
