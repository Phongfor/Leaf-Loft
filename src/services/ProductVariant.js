import axiosClient from './axiosClient';

const getVariantById = async (id) => {
    return await axiosClient.get(`/variant/${id}`);
};

const createVariant = async (id, body) => {
    return await axiosClient.post(`/variant/${id}`, body);
};

const updateVariant = async (id, body) => {
    return await axiosClient.put(`/variant/${id}`, body);
};

const deleteVariant = async (id) => {
    return await axiosClient.delete(`/variant/${id}`);
};

export {
    getVariantById,
    createVariant,
    updateVariant,
    deleteVariant
};