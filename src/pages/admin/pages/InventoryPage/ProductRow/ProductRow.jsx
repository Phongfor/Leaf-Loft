import { LuPencil, LuTrash2 } from 'react-icons/lu';
import StockBar from '../StockBar/StockBar';
import { statusStyle } from '../constants';


function ProductRow({ product, onDelete }) {
    return (
        <tr className='border-t border-gray-50 hover:bg-gray-50'>
            <td className='px-6 py-4'>
                <div className='flex items-center gap-3'>
                    <img src={product.image} className='w-12 h-12 rounded-xl object-cover' />
                    <div>
                        <p className='text-sm font-semibold'>{product.name}</p>
                        <p className='text-xs text-gray-400'>
                            {product.category}
                            {product.subcategory ? ` · ${product.subcategory}` : ''}
                        </p>
                    </div>
                </div>
            </td>

            <td className='px-6 py-4 text-xs font-mono text-gray-500'>
                {product.sku}
            </td>

            <td className='px-6 py-4'>
                <StockBar stock={product.stock} />
            </td>

            <td className='px-6 py-4 font-bold'>
                ${product.price}.00
            </td>

            <td className='px-6 py-4'>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${statusStyle[product.status]}`}>
                    {product.status}
                </span>
            </td>

            <td className='px-6 py-4'>
                <div className='flex gap-2'>
                    <button className='w-8 h-8 border rounded-lg flex items-center justify-center'>
                        <LuPencil size={14} />
                    </button>

                    <button
                        onClick={() => onDelete(product.id)}
                        className='w-8 h-8 border rounded-lg flex items-center justify-center hover:text-red-500'
                    >
                        <LuTrash2 size={14} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ProductRow;