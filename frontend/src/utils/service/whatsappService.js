import api from "./api"
export const whatsappReply = async(payload)=>{
    const response = await api.post('/v1/whatsapp/reply', payload);
    return response.data;
}

export const getChatHistory = async (customerId)=>{
    const response = await api.get(`/v1/whatsapp/history?customerId=${customerId}`);
    return response.data;
}