import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurant: null,
        searchRestaurant: null,
        searchCuisine: null,
        toggle: false,
        cart: [] // Initialize cart as an empty array
    },
    reducers: {
        allRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
        searchRes: (state, action) => {
            state.searchRestaurant = action.payload;
        },
        toggle: (state, action) => {
            state.toggle = action.payload;
        },
        searchCuisine: (state, action) => {
            state.searchCuisine = action.payload;
        },
        cart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cart.splice(action.payload, 1);
        },
        clearCart:(state,action)=>{
          state.cart = []
        }
    }
});

export const { allRestaurant, searchRes, toggle, searchCuisine, cart, removeItem,clearCart } = restaurantSlice.actions;

export default restaurantSlice.reducer;
