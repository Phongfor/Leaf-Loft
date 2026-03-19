import axiosClient from './axiosClient';

const createPermission = async (body) => {
    return await axiosClient.post('/permissions', body);
};

const getPermissions = async () => {
    return await axiosClient.get('/permissions');
};

const deletePermission = async (id) => {
    return await axiosClient.delete(`/permissions/${id}`);
};

export { createPermission, getPermissions, deletePermission };