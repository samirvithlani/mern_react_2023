import { configureStore } from "@reduxjs/toolkit";
//import CartSlice from "./redux/CartSlice";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSlice";
import contentReducer from "./redux/ContentSlice";
import themeReducer from "./redux/ThemeSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        bank: bankReducer,
        content:contentReducer,
        theme:themeReducer
    }
})