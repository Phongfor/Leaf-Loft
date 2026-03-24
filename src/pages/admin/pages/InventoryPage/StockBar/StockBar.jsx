import { stockBarColor } from "../utils";

function StockBar({ stock }) {
    return (
        <div>
            <p className={`text-sm font-semibold mb-1.5 ${stock === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                {stock} in stock
            </p>

            <div className='w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                <div
                    className={`h-full rounded-full ${stockBarColor(stock)}`}
                    style={{ width: `${Math.min((stock / 150) * 100, 100)}%` }}
                />
            </div>
        </div>
    );
}

export default StockBar;