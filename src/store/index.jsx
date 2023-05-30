import {configureStore} from '@reduxjs/toolkit'
import { HomeReducer } from '../components/HomeSlice'
import { FavCards } from '../components/FavouriteSlice'

const stores = configureStore({
    reducer:{
        home:HomeReducer,
        cards:FavCards
    }
})

export default stores