import axios from "axios";
import { useDispatch } from 'react-redux';
import { allRestaurant } from "../utils/Slices/RestaurantSlice";

const getAllRestaurant = async (dispatch) => {
    const baseUrl = "http://localhost:5000/api/v1";
    

    try {
        const token = localStorage.getItem("token");
        console.log(token);

        const response = await axios.get(`${baseUrl}/getRes`, {
            headers: {
                Authorization: token // Set the Authorization header with the token directly
            }
        });
        console.log("api wala",response.data);

        dispatch(allRestaurant(response.data));
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

export default getAllRestaurant;
