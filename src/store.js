import { configureStore } from "@reduxjs/toolkit";
//import CartSlice from "./redux/CartSlice";
import cartReducer from "./redux/CartSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})