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
        
    }
    
})
//export actions
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;