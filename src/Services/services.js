import axios from 'axios';

const BASE_URL = "http://localhost:4000/posts";

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 
        "Content-Type": "application/json"
    },
});

export const getAllPosts = async () => {
    try {
        const response = await api.get('/');
        return response.data;
        } catch (error) {
            console.error("Error fetching posts:", error.response?.data || error.message);
            return null;
        }
    };

export const getPostById = async ({id}) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
        } catch (error) {
            console.error(`Error fetching posts with id ${id}:`, error.response?.data || error.message);
            return null;
        }
    };

export const createPost = async (author, title, content, cover) => {
    try {
            const response = await api.post('/', {author,title, content, cover});
            return response.data;
        } catch (error) {
            console.error("Error creating post:", error.response?.data || error.message);
            return null;
        }
    };

export const updatePost = async (id, author, title, content, cover) => {
    try {
        const response = await api.put(`/${id}`, {author, title, content, cover});
        return response.data;
    } catch (error) {
        console.error(`Error updating post with id ${id}:`, error.response?.data || error.message);
        return null;
    }
};

export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post with id ${id}:`, error.response?.data || error.message);
        return null;
    }
};

