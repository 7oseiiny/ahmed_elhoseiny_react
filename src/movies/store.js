import { configureStore } from "@reduxjs/toolkit";
import favoiteSlice from './slice/favorite';
import moviesSlice from './slice/movie';

const store =configureStore({
    reducer:{
        favorite:favoiteSlice,
        movies:moviesSlice
    }
})
export default store