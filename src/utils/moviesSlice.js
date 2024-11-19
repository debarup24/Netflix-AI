import { createSlice } from "@reduxjs/toolkit";

 const moviesSlice = createSlice({
    name : "movies" ,
     initialState: {
        nowPlayingMovies : null ,
        trailerVideo : null 
     } ,
     reducers : {
       // actions 
       addNowPlayingMovies : (state, action) => {
        state.nowPlayingMovies = action.payload ;
         }, 
         addTrendingMovies : (state, action) => {
            state.TrendingMovies = action.payload ;
         }, 
         addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload ;
         }, 
        addTrailerVideo : (state, action) => {
         state.trailerVideo = action.payload ;
        }
       
     }
 });

 export const { addNowPlayingMovies, addTrailerVideo, addTrendingMovies,  addPopularMovies } = moviesSlice.actions ;

 export default moviesSlice.reducer ;

 // after creating this slice , add this slice to the appStore