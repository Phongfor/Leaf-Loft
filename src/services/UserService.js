import axiosClient from './axiosClient';



const getUsers = async () => {
    return await axiosClient.get('/users');
};

const getMyInfo = async () => {
    return await axiosClient.get('/users/my-info');
};

const updateUser = async (userId, body) => {
    return await axiosClient.put(`/users/update/${userId}`, body);
};

const deleteUser = async (userId) => {
    return await axiosClient.delete(`/users/delete/${userId}`);
};

export {getUsers, getMyInfo, updateUser, deleteUser };