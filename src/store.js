import { configureStore } from "@reduxjs/toolkit";
//import CartSlice from "./redux/CartSlice";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSlice";
import contentReducer from "./redux/ContentSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        bank: bankReducer,
        content:contentReducer
    }
})