// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from './../../axiosConfig/instance';

export const  moveiAction= createAsyncThunk('movie/popular/getall',async (page)=>{
    const res = await axiosInstance.get(`/movie/popular/?page=${page}`)
    // console.log(res.data.results);
    let list =[]
    for (const x of res.data.results) {
        x.isfav=false
        list.push({...x})
    }
    
    return list

})

const moviesSlice = createSlice({
    name: "movies",
    initialState:{movies:[]},
    extraReducers:(builder)=>{
        builder.addCase(moveiAction.fulfilled,(state ,action)=>{
            // console.log(action.payload);
            state.movies=action.payload
        })

        // builder.addCase(moveiAction.rejected,(state ,action)=>{
        //     state.movies=[]
        // })

     
    }

})
export default moviesSlice.reducer
