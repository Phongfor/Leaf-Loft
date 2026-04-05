import { addCartItem, getCart } from '@/services/CartSevice';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('cart');

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const [wishlist, setWishlist] = useState([]);

    const addToCart = async (product) => {
        try {
            const payload = {
                productVariantId: product.productVariantId,
                quantity: product.quantity
            };
            const res = await addCartItem(payload);

            toast.success('Thêm vào giỏ hàng thành công!');
        } catch (err) {
            toast.error(
                err?.response?.data?.message || 'Thêm vào giỏ hàng thất bại'
            );
        }
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

    const decreaseQuantity = (id, color, size) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id && item.color === color && item.size === size
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
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

    const cartCount = Array.isArray(cart)
        ? cart.reduce((sum, item) => sum + item.quantity, 0)
        : 0;
    const wishlistCount = wishlist.length;

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await getCart();
                const result = res.data.result;
                setCart(result.items ?? []);
                setTotal(result.totalPrice ?? 0);
            } catch (err) {9
                toast.error(
                    err?.response?.data?.message || 'Không thể tải giỏ hàng'
                );
            }
        };
        fetchCart();
    }, []);
    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        cartCount,
        wishlistCount,
        decreaseQuantity,
        total
    };

    return (
        <SideBarContext.Provider value={values}>
            {children}
        </SideBarContext.Provider>
    );
};
