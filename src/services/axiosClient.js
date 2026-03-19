import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5173/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('accessToken');
        const expiresAt = localStorage.getItem('expiresAt');

        if (expiresAt && Date.now() > expiresAt) {
            console.log('Token hết hạn');
            return Promise.reject({
                response: {
                    status: 401
                },
                config: config
            });
        }
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalRequest = err.config;
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return Promise.reject(err);
        try {
            if (err.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                const res = await refreshToken(refreshToken);
                const newAccessToken = res.accessToken;

                console.log('Refresh token success');

                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('expiresAt', res.expiresAt);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axiosClient(originalRequest);
            }
        } catch (err) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            localStorage.removeItem('expiresAt');
            return Promise.reject(err);
        }
    }
);

export default axiosClient;
