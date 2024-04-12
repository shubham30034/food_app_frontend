// loginSlice.js

import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        initial: false,
        token : null
    },
    reducers: {
        toggle: (state, action) => {
            state.initial = !state.initial;
        },
        token : (state,action)=>{
            state.token = action.payload
        }
    }
});

export const { toggle ,token} = loginSlice.actions;

export default loginSlice.reducer;
