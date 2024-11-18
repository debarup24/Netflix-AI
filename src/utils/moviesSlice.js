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
        addTrailerVideo : (state, action) => {
         state.trailerVideo = action.payload ;
        }
       
     }
 });

 export const { addNowPlayingMovies, addTrailerVideo }= moviesSlice.actions ;

 export default moviesSlice.reducer ;

 // after creating this slice , add this slice to the appStore