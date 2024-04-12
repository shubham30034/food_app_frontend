// store.js

import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";

import MenuSlice from "./Slices/MenuSlice";
import RestaurantSlice from "./Slices/RestaurantSlice";
import themeSwitcher from "./Slices/ThemeSlice"


const store = configureStore({
     reducer:{
          login: loginSlice,
          menu : MenuSlice,
          restaurant : RestaurantSlice,
          theme : themeSwitcher,
     }
});

export default store;
