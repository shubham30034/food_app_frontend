import axios from 'axios';

const baseUrl = "https://food-app-backend-vhy3.onrender.com/api/v1";

const registationServices = {
    signup: async function(data) {
        try {
          const response =  await axios.post(`${baseUrl}/signup`, data);
          

          return response.data
            
        } catch (error) {
            
            return error.response.data; 
        }
       
    },

    login: async function(data){
        try {
            const response = await axios.post(`${baseUrl}/login`, data);
        
    
            return response.data; 
        } catch (error) {
            console.error('Login failed', error.response.data);
            return error.response.data; 
        }
    }
};

export default registationServices;
