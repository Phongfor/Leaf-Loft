export const stockBarColor = (stock) => {
    if (stock === 0) return 'bg-red-400';
    if (stock < 20) return 'bg-orange-400';
    return 'bg-green-400';
};