import { createSlice } from "@reduxjs/toolkit";



const menuSlice = createSlice({
   name : "menu",
   initialState :{
    menu : null,
   },
   reducers : {
    addMenu : (state,action)=>{
        state.menu = action.payload
    },
   }
})

export const{addMenu,menuSwitch} = menuSlice.actions
export default menuSlice.reducer