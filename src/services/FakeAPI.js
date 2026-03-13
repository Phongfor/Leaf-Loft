const fakeLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'user@gmail.com' && password === '123456') {
                const expiresIn = 10000; // 5 giây

                resolve({
                    user: {
                        id: 1,
                        name: 'User',
                        email: 'user@gmail.com'
                    },
                    accessToken: 'fake-jwt-token',
                    refreshToken: 'fake-jwt-refreshToken',
                    expiresAt: Date.now() + expiresIn
                });
            } else {
                reject({
                    message: 'Email hoặc mật khẩu không đúng'
                });
            }
        }, 1500);
    });
};

const fakeRefreshTokenApi = (refreshToken) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                accessToken: 'new-fake-token',
                expiresAt: Date.now() + 5000
            });
        }, 1000);
    });
};

export { fakeLoginApi, fakeRefreshTokenApi };
