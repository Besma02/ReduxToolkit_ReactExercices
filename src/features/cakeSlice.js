import { createSlice } from "@reduxjs/toolkit";
export const cakeSlice=createSlice({
    name:"cake",
    initialState:{
        numberofcake:10
    },
    reducers:{
        ordred:(state)=>{
            state.numberofcake--
        },
        restoked:(state,action)=>{
            state.numberofcake+=action.payload
        }
    }
})
export const {ordred,restoked}= cakeSlice.actions
export default cakeSlice.reducer