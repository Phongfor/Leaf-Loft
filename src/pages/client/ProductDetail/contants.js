const productDetail = {
    name: "Áo thun",
    description: "Áo đẹp",
    
    variants: [
        {
            color: "Red",
            size: "M",
            price: 20,
            image: "https://images.unsplash.com/photo-1570786240066-c0d753711cfe?w=600&auto=format&fit=crop&q=60"
        },
        {
            color: "Red",
            size: "L",
            price: 22,
            image: "https://picsum.photos/300/300?9"
        },
        {
            color: "Blue",
            size: "M",
            price: 18,
            image: "https://picsum.photos/300/300?10"
        }
    ],

    colors: [
        { name: "Red", code: "#f00" },
        { name: "Blue", code: "#00f" }
    ],

    sizes: ["M", "L"],

    images : ["https://images.unsplash.com/photo-1570786240066-c0d753711cfe?w=600&auto=format&fit=crop&q=60","https://picsum.photos/300/300?9","https://picsum.photos/300/300?10"]
};

export default productDetail;
