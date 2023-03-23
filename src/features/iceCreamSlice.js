import { createSlice } from "@reduxjs/toolkit";
export const iceCreamSlice=createSlice({
    name:"iceCream",
    initialState:{
        numberoficeCream:20
    },
    reducers:{
        ordred:(state)=>{
            state.numberoficeCream--
        },
        restoked:(state,action)=>{
            state.numberoficeCream+=action.payload
        }
    }
})
export const {ordred,restoked}= iceCreamSlice.actions
export default iceCreamSlice.reducer