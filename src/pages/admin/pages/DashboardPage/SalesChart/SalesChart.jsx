import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';

function SalesChart({ data }) {
    return (
        <div className='bg-white rounded-2xl p-6 shadow-sm'>
            <div className='flex items-center justify-between mb-1'>
                <div>
                    <h3 className='font-bold text-gray-900'>Sales Trends</h3>
                    <p className='text-xs text-gray-400'>
                        Revenue analytics for the past 7 days
                    </p>
                </div>
            </div>

            <div className='h-48 mt-4'>
                <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id='salesGrad' x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='5%' stopColor='#4ade80' stopOpacity={0.3} />
                                <stop offset='95%' stopColor='#4ade80' stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis dataKey='day' />
                        <YAxis hide />
                        <Tooltip />

                        <Area
                            type='monotone'
                            dataKey='sales'
                            stroke='#4ade80'
                            fill='url(#salesGrad)'
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SalesChart;