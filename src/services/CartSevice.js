import axiosClient from './axiosClient';

const addCartItem = (data) => {
    return axiosClient.post('/cartItem', data);
};

const getCartByUserId = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
};

 const getCart = async () => {
    return await axiosClient.get(`/cart`);
};

 const deleteCartItem = async (cartItemId) => {
    return await axiosClient.delete(`/cart/${cartItemId}`);
};

export { addCartItem, getCartByUserId, deleteCartItem ,getCart};
