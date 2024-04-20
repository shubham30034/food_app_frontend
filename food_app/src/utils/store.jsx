// store.js

import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";

import MenuSlice from "./Slices/MenuSlice";
import RestaurantSlice from "./Slices/RestaurantSlice";
import themeSwitcher from "./Slices/ThemeSlice"
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import { version } from "react";

const persistConfig ={
   key : "root",
   version : 1,
   storage
}


const reducer =  combineReducers({
     login: loginSlice,
     menu : MenuSlice,
     restaurant : RestaurantSlice,
     theme : themeSwitcher,
     
})

const persistedReducer = persistReducer(persistConfig,reducer)


const store = configureStore({
     reducer: persistedReducer
});

export default store;
