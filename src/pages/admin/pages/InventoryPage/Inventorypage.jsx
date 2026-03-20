import { useState } from 'react';
import { LuPlus, LuPencil, LuTrash2 } from 'react-icons/lu';

const products = [
    { id: 1, name: 'Neo Blaze Runner', category: 'Footwear', subcategory: 'Sports', sku: 'SKU-BR-061', stock: 45, price: 129, status: 'ACTIVE', image: 'https://picsum.photos/seed/shoe1/60/60' },
    { id: 2, name: 'Zenith Smart Watch', category: 'Gadgets', subcategory: 'Electronics', sku: 'SKU-ZW-042', stock: 12, price: 299, status: 'LOW STOCK', image: 'https://picsum.photos/seed/watch1/60/60' },
    { id: 3, name: 'Aura ANC Headphones', category: 'Audio', subcategory: 'Accessories', sku: 'SKU-AU-112', stock: 120, price: 45, status: 'ACTIVE', image: 'https://picsum.photos/seed/head1/60/60' },
    { id: 4, name: 'Lumina 2.0 Cam', category: 'Photography', subcategory: '', sku: 'SKU-LC-908', stock: 0, price: 550, status: 'OUT OF STOCK', image: 'https://picsum.photos/seed/cam1/60/60' },
];

const statusStyle = {
    'ACTIVE':       'bg-green-100 text-green-700',
    'LOW STOCK':    'bg-orange-100 text-orange-600',
    'OUT OF STOCK': 'bg-red-100 text-red-600',
};

const stockBarColor = (stock) => {
    if (stock === 0) return 'bg-red-400';
    if (stock < 20) return 'bg-orange-400';
    return 'bg-green-400';
};

function InventoryPage() {
    const [items, setItems] = useState(products);

    const handleDelete = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

    return (
        <div className='p-8'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-900'>Product Inventory</h2>
                    <p className='text-xs text-gray-400 mt-0.5'>
                        Dashboard &rsaquo; <span className='text-green-500 font-medium'>Inventory</span>
                    </p>
                </div>
                <button className='flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors'>
                    <LuPlus size={16} />
                    ADD NEW PRODUCT
                </button>
            </div>

            {/* Table */}
            <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100'>
                            <th className='px-6 py-4 text-left'>Product Details</th>
                            <th className='px-6 py-4 text-left'>SKU</th>
                            <th className='px-6 py-4 text-left'>Stock Status</th>
                            <th className='px-6 py-4 text-left'>Price</th>
                            <th className='px-6 py-4 text-left'>Status</th>
                            <th className='px-6 py-4 text-left'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((product) => (
                            <tr key={product.id} className='border-t border-gray-50 hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-3'>
                                        <img src={product.image} alt={product.name} className='w-12 h-12 rounded-xl object-cover bg-gray-100' />
                                        <div>
                                            <p className='text-sm font-semibold text-gray-900'>{product.name}</p>
                                            <p className='text-xs text-gray-400'>
                                                {product.category}{product.subcategory ? ` · ${product.subcategory}` : ''}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-xs font-mono text-gray-500'>{product.sku}</td>
                                <td className='px-6 py-4'>
                                    <p className={`text-sm font-semibold mb-1.5 ${product.stock === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                                        {product.stock} in stock
                                    </p>
                                    <div className='w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                                        <div
                                            className={`h-full rounded-full ${stockBarColor(product.stock)}`}
                                            style={{ width: `${Math.min((product.stock / 150) * 100, 100)}%` }}
                                        />
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-sm font-bold text-gray-900'>${product.price}.00</td>
                                <td className='px-6 py-4'>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusStyle[product.status]}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-2'>
                                        <button className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500'>
                                            <LuPencil size={14} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors text-gray-500'
                                        >
                                            <LuTrash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className='flex items-center justify-between px-6 py-4 border-t border-gray-100'>
                    <p className='text-xs text-gray-400'>
                        Showing <span className='font-semibold text-gray-700'>1–{items.length}</span> of{' '}
                        <span className='font-semibold text-gray-700'>24</span> products
                    </p>
                    <div className='flex items-center gap-1'>
                        {['‹', 1, 2, 3, '›'].map((p, i) => (
                            <button
                                key={i}
                                className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-colors
                                    ${p === 1 ? 'bg-green-400 text-white font-bold' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryPage;