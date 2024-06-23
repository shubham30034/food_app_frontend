// searchRestaurant.js

import axios from 'axios';
import { searchRes,searchCuisine } from '../utils/Slices/RestaurantSlice';

const searchRestaurant = async (searchQuery, dispatch) => {
  const baseUrl = "https://food-app-backend-vhy3.onrender.com/api/v1";

  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/searchRestaurant?searchQuery=${searchQuery}`, {
      headers: {
          Authorization: token // Set the Authorization header with the token directly
      }
  });
    dispatch(searchRes(response.data)); // Assuming response.data contains the data you need

  } catch (error) {
    console.log(error);
  }
};


  export const cuisineApi = async (searchQuery, dispatch) => {
  const baseUrl = "http://localhost:5000/api/v1";
  console.log(searchQuery);

  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/searchCuisine?cuisineName=${searchQuery}`, {
      headers: {
          Authorization: token // Set the Authorization header with the token directly
      }
  });
  console.log("response of serachCuisine",response);
    dispatch(searchCuisine(response.data)); // Assuming response.data contains the data you need

  } catch (error) {
    console.log(error);
  }
};

export default searchRestaurant;
