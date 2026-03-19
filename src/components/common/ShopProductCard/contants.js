const Shopproducts = [
    {
        id: 1,
        brand: 'Terra Studio',
        name: 'Sculptural Form Vase',
        price: 85,
        sizes: ['Medium', 'Large'],
        colors: [
            { name: 'Ivory', code: '#FFFFF0' },
            { name: 'Terracotta', code: '#E2725B' },
            { name: 'Sage', code: '#8A9A7B' },
        ],
        category: 'Vases',
        badge: 'TRENDING',
        image: 'https://images.unsplash.com/photo-1754752983596-074b1294b570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlcyUyMFZhc2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 2,
        brand: 'Lumina Collective',
        name: 'Orbital Glow Lamp',
        price: 120,
        sizes: ['Small', 'Medium'],
        colors: [
            { name: 'Matte Black', code: '#2B2B2B' },
            { name: 'Gold', code: '#D4AF37' },
        ],
        category: 'Lamps',
        image: 'https://images.unsplash.com/photo-1693329428271-3742bd8220cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww'
    },
    {
        id: 3,
        brand: 'Soft Goods Co.',
        name: 'Grid Velvet Cushion',
        price: 45,
        sizes: ['45x45', '50x50'],
        colors: [
            { name: 'Dusty Pink', code: '#D4A5A5' },
            { name: 'Forest Green', code: '#4A6741' },
            { name: 'Navy', code: '#2C3E6B' },
        ],
        category: 'Cushions',
        badge: 'SALE',
        image: 'https://plus.unsplash.com/premium_photo-1687989478462-f21931633791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 4,
        brand: 'Terra Studio',
        name: 'Sculptural Form Vase',
        price: 85,
        sizes: ['Medium', 'Large'],
        colors: [
            { name: 'Ivory', code: '#FFFFF0' },
            { name: 'Terracotta', code: '#E2725B' },
        ],
        category: 'Vases',
        badge: 'TRENDING',
        image: 'https://images.unsplash.com/photo-1618441079655-28413f13113d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlcyUyMFZhc2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 5,
        brand: 'Lumina Collective',
        name: 'Orbital Glow Lamp',
        price: 120,
        sizes: ['Small', 'Medium'],
        colors: [
            { name: 'Matte Black', code: '#2B2B2B' },
            { name: 'White', code: '#F5F5F5' },
            { name: 'Gold', code: '#D4AF37' },
        ],
        category: 'Lamps',
        image: 'https://images.unsplash.com/photo-1669234845051-12fff71e7fe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
    },
    {
        id: 6,
        brand: 'Soft Goods Co.',
        name: 'Grid Velvet Cushion',
        price: 45,
        sizes: ['45x45', '50x50'],
        colors: [
            { name: 'Dusty Pink', code: '#D4A5A5' },
            { name: 'Mustard', code: '#E3A832' },
        ],
        category: 'Cushions',
        badge: 'SALE',
        image: 'https://plus.unsplash.com/premium_photo-1706559881976-392253eda95b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlcyUyMEN1c2hpb258ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 7,
        brand: 'Terra Studio',
        name: 'Sculptural Form Vase',
        price: 85,
        sizes: ['Medium', 'Large'],
        colors: [
            { name: 'Sage', code: '#8A9A7B' },
            { name: 'Clay', code: '#B66A50' },
        ],
        category: 'Vases',
        badge: 'TRENDING',
        image: 'https://plus.unsplash.com/premium_photo-1680543345245-89ac63571b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlcyUyMFZhc2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 8,
        brand: 'Lumina Collective',
        name: 'Orbital Glow Lamp',
        price: 120,
        sizes: ['Small', 'Medium'],
        colors: [
            { name: 'Matte Black', code: '#2B2B2B' },
            { name: 'Copper', code: '#B87333' },
        ],
        category: 'Lamps',
        image: 'https://images.unsplash.com/photo-1755433327853-33fffe3768e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        brand: 'Soft Goods Co.',
        name: 'Grid Velvet Cushion',
        price: 45,
        sizes: ['45x45', '50x50'],
        colors: [
            { name: 'Forest Green', code: '#4A6741' },
            { name: 'Navy', code: '#2C3E6B' },
            { name: 'Ivory', code: '#FFFFF0' },
        ],
        category: 'Cushions',
        badge: 'SALE',
        image: 'https://images.unsplash.com/photo-1570786240066-c0d753711cfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBDdXNoaW9ufGVufDB8fDB8fHww'
    },
    {
        id: 10,
        brand: 'Decor Lab',
        name: 'Minimal Wall Clock',
        price: 75,
        sizes: ['30cm', '40cm'],
        colors: [
            { name: 'White', code: '#F5F5F5' },
            { name: 'Matte Black', code: '#2B2B2B' },
        ],
        category: 'Mirrors',
        image: 'https://picsum.photos/300/300?9'
    },
    {
        id: 11,
        brand: 'Urban Home',
        name: 'Concrete Planter',
        price: 55,
        sizes: ['Small', 'Medium', 'Large'],
        colors: [
            { name: 'Concrete Grey', code: '#9E9E9E' },
            { name: 'Charcoal', code: '#4A4A4A' },
        ],
        category: 'Mirrors',
        image: 'https://picsum.photos/300/300?10'
    }
];

export default Shopproducts;