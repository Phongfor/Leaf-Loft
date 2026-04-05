import axiosClient from './axiosClient';

const createProduct = async (body) => {
    return await axiosClient.post('/product', body);
};

const getProductById = async (productId) => {
    return await axiosClient.get(`/product/${productId}`);
};

const updateProduct = async (productId, body) => {
    return await axiosClient.put(`/product/${productId}`, body);
};

const deleteProduct = async (productId) => {
    return await axiosClient.delete(`/product/${productId}`);
};

const getProductList = async (
  page = 0,
  size = 10,
  sortField = 'name',
  direction = 'ASC'
) => {
    return await axiosClient.get('/product/list', {
        params: {
            page,
            size,
            sortField,
            direction
        }
    });
};

// nếu có filter/search (POST)
const searchProducts = async (body) => {
    return await axiosClient.post('/product/list', body);
};

export {
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductList,
    searchProducts
};
