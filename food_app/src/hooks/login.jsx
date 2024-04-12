import axios from 'axios';

const baseUrl = "http://localhost:5000/api/v1";

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
