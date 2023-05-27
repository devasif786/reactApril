import { createSlice } from "@reduxjs/toolkit";




const favSlice = createSlice({
    name:'cards',
    initialState:{
        cards:[]
    },
    reducers:{
        addFavCards:(state, action)=>{
            const card = state.cards
            card.push(action.payload)
        },
        removeCards:(state, action)=>{
            const card=state.cards
            // card.filter((id) => id !=action.payload)
            card.splice(action.payload, 1)
        }
    }
})

export const FavCards = favSlice.reducer

export const {addFavCards, removeCards} = favSlice.actions

