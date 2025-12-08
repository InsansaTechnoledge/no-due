import api from "./api";

export const registerUser = async (userData) => {
        const response = await api.post('/v1/user', userData);
        return response.data;
};

export const loginUser = async (loginData) => {
        const response = await api.post('/v1/auth/login', loginData);
        return response.data;
};