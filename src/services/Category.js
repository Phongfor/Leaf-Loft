import axiosClient from './axiosClient';

const getCategories = async () => {
    return await axiosClient.get('/category');
};

const getCategoryById = async (id) => {
    return await axiosClient.get(`/category/${id}`);
};

const createCategory = async (body) => {
    return await axiosClient.post('/category', body);
};

const updateCategory = async (id, body) => {
    return await axiosClient.put(`/category/${id}`, body);
};

const deleteCategory = async (id) => {
    return await axiosClient.delete(`/category/${id}`);
};

export {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
