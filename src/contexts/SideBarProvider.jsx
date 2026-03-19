import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('cart'); 

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) =>
                    item.id === product.id &&
                    item.color === product.color &&
                    item.size === product.size
            );
            if (existing) {
                return prev.map((item) =>
                    item === existing
                        ? {
                              ...item,
                              quantity: item.quantity + product.quantity
                          }
                        : item
                );
            }
            return [...prev, product];
        });
    };

    const removeFromCart = (id, color, size) => {
        setCart((prev) =>
            prev.filter(
                (item) =>
                    !(
                        item.id === id &&
                        item.color === color &&
                        item.size === size
                    )
            )
        );
    };

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            return exists
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = wishlist.length;

    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        cartCount,
        wishlistCount
    };

    return (
        <SideBarContext.Provider value={values}>
            {children}
        </SideBarContext.Provider>
    );
};
