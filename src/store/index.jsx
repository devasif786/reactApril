import {configureStore} from '@reduxjs/toolkit'
import { HomeReducer } from '../components/HomeSlice'
import { FavCards } from '../components/FavouriteSlice'

const store = configureStore({
    reducer:{
        home:HomeReducer,
        cards:FavCards
    }
})

export default store