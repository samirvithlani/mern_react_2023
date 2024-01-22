import { configureStore } from "@reduxjs/toolkit";
//import CartSlice from "./redux/CartSlice";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        bank: bankReducer
    }
})