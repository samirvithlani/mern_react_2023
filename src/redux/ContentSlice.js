import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    content: [],
    isLoading: false,
    isError: null
}


export const fetchContent =createAsyncThunk(
    'content/fetchContent',
    async()=>{
        const res = await axios.get('https://node5.onrender.com/user/user')
        const data = await res.data.data
        return data
    }
)

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchContent.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled,(state,action)=>{
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchContent.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
    }
})
export default contentSlice.reducer