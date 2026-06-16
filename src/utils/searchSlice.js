import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
 name:'search',
 initialState:{

 } ,
 reducers:{
    cacheApi:(state,action)=>{
         state=Object.assign(state,action.payload);
    }

 }  
})
export const{cacheApi}=searchSlice.actions;
export default searchSlice.reducer;