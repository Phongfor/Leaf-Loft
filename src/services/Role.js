import axiosClient from './axiosClient';

const getRoles = async () => {
    return await axiosClient.get('/roles');
};

const createRole = async (body) => {
    return await axiosClient.post('/roles', body);
};

const deleteRole = async (role) => {
    return await axiosClient.delete(`/roles/${role}`);
};

export { getRoles, createRole, deleteRole };