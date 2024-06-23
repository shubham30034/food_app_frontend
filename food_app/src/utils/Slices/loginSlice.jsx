// loginSlice.js

import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        initial: false,
        token : null,
        isAuthenticated:false
    },
    reducers: {
        toggle: (state, action) => {
            state.initial = !state.initial;
        },
        token : (state,action)=>{
            state.token = action.payload
        },
        login : (state,action)=>{
            state.isAuthenticated = true
        },
        
        logout : (state,action)=>{
            state.isAuthenticated = false
        },
        
    }
});

export const { toggle ,token,login,logout} = loginSlice.actions;

export default loginSlice.reducer;
