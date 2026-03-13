const products = [
    {
        id: 1,
        name: 'Oversized Hoodie',
        price: 119.99,
        sku: 'HD-12349',
        category: 'Hoodie',
        image: 'https://images.unsplash.com/photo-1520975698519-59f26c1f0f53',
        description: 'Comfortable oversized hoodie made from premium cotton.',
        rating: 4.5,
        stock: 12
    },
    {
        id: 2,
        name: 'Classic White T-Shirt',
        price: 39.99,
        sku: 'TS-87234',
        category: 'T-Shirt',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        description: 'Minimal classic white t-shirt for everyday wear.',
        rating: 4.3,
        stock: 25
    },
    {
        id: 3,
        name: 'Denim Jacket',
        price: 159.99,
        sku: 'JK-99871',
        category: 'Jacket',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985',
        description: 'Modern denim jacket with vintage style.',
        rating: 4.7,
        stock: 8
    },
    {
        id: 4,
        name: 'Black Sneakers',
        price: 89.99,
        sku: 'SN-77621',
        category: 'Shoes',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
        description: 'Comfortable sneakers suitable for everyday walking.',
        rating: 4.6,
        stock: 15
    },
    {
        id: 5,
        name: 'Slim Fit Jeans',
        price: 79.99,
        sku: 'JN-55678',
        category: 'Jeans',
        image: 'https://images.unsplash.com/photo-1514996937319-344454492b37',
        description: 'Stylish slim fit jeans with stretch fabric.',
        rating: 4.4,
        stock: 20
    },
    {
        id: 6,
        name: 'Casual Backpack',
        price: 49.99,
        sku: 'BP-33421',
        category: 'Bag',
        image: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f',
        description: 'Lightweight backpack perfect for travel and daily use.',
        rating: 4.2,
        stock: 30
    }
];

 const cartItems = [
    {
        id: 1,
        productId: 1,
        quantity: 2
    },
    {
        id: 2,
        productId: 4,
        quantity: 1
    }
];

export  {cartItems,products};
