import axios from 'axios';
import { addMenu } from '../utils/Slices/MenuSlice';

export const fetchMenu = async (id, dispatch) => {
    const baseUrl = `https://food-app-backend-vhy3.onrender.com/api/v1`;
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    try {
        const response = await axios.get(`${baseUrl}/getMenu/${id}`, {
            headers: {
                Authorization: token // Set the Authorization header with the token directly
            }
        });
        dispatch(addMenu(response.data));

    } catch (error) {
        console.error(error);
    }
};
