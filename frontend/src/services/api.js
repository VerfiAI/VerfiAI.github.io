import axios from 'axios';
import config from '../config';

const api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const verifyReference = async (reference) => {
    try {
        const response = await api.post('/api/verify-reference', { reference });
        return response.data;
    } catch (error) {
        console.error('Error verifying reference:', error);
        throw error;
    }
};

export const analyzePaper = async (doi) => {
    try {
        const response = await api.post('/api/analyze-paper', { doi });
        return response.data;
    } catch (error) {
        console.error('Error analyzing paper:', error);
        throw error;
    }
};

export const uploadDocument = async (formData) => {
    try {
        const response = await api.post('/api/upload-document', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading document:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await api.post('/api/create-user', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}; 