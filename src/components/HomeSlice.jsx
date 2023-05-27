import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk("movies/getData",async()=>{
    const data = await fetch('https://www.omdbapi.com/?s=action&apikey=593d3d4f&page=1')
    const ans = await data.json()
    // console.log(ans.Search)
    return ans.Search
})

const HomeSlice = createSlice({
    name:"movies",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            return action.payload
        }),
        builder.addCase(fetchData.rejected, (state, action)=>{
            console.log("action rejected", action)
            state.movies=[]
        }),
        builder.addCase(fetchData.pending, (state, action)=>{
            console.log("action pending", action)
        })
    }
})


export const HomeReducer = HomeSlice.reducer



