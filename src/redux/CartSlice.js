import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    //type,payload
    reducers: {
        addToCart: (state, action) => {
            console.log("action", action)
            console.log("state", state)
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {

            console.log("remove payload...", action.payload)
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }
        
    }
    
})
//export actions
export const { addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;