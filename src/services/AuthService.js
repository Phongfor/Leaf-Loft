import axiosClient from './axiosClient';

const login = async (body) => {
    return await axiosClient.post('/auth/login', body);
};

const registers = async (body) => {
    return await axiosClient.post('/users', body);
};

const refreshToken = async (body) => {
    return await axiosClient.post('/auth/refresh', body);
};

const logout = async (body) => {
    return await axiosClient.post('/auth/logout', body);
};

export { login, refreshToken, logout,registers };