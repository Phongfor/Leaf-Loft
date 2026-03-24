import ProductRow from "../ProductRow/ProductRow";

function ProductTable({ items, onDelete }) {
    return (
        <table className='w-full'>
            <thead>
                <tr className='text-xs text-gray-400 border-b'>
                    <th className='px-6 py-4 text-left'>Product</th>
                    <th className='px-6 py-4 text-left'>SKU</th>
                    <th className='px-6 py-4 text-left'>Stock</th>
                    <th className='px-6 py-4 text-left'>Price</th>
                    <th className='px-6 py-4 text-left'>Status</th>
                    <th className='px-6 py-4 text-left'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {items.map((p) => (
                    <ProductRow key={p.id} product={p} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;