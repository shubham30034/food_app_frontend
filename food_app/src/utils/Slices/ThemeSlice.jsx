import {createSlice} from "@reduxjs/toolkit"


const themeSwitcher = createSlice({
  name : "theme",
  initialState : {
     switch : false
  },
  reducers : {
    themeSwitch  : (state,action)=>{
      state.switch = !state.switch
    }
  }



})


export const { themeSwitch } = themeSwitcher.actions

export default themeSwitcher.reducer