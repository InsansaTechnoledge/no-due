import api from "./api";

export const registerUser = async (userData) => {
        const response = await api.post('/v1/user', userData);
        return response.data;
};

export const updateUser = async (updatedData) => {
        const response = await api.put('/v1/user', updatedData);
        return response.data;
};