import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './features/cakeSlice'
import iceCreamReducer from './features/iceCreamSlice'
import userReducer from './features/userSlice'
export const store= configureStore({
 reducer:{
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
 }
})