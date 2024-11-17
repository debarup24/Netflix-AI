import { createSlice } from "@reduxjs/toolkit";

 const moviesSlice = createSlice({
    name : "movies" ,
     initialState: {
        nowPlayingMovies : null
     } ,
     reducers : {
       // actions 
       addNowPlayingMovies : (state, action) => {
        state.nowPlayingMovies = action.payload ;
       }
     }
 });

 export const { addNowPlayingMovies, }= moviesSlice.actions ;

 export default moviesSlice.reducer ;

 // after creating this slice , add this slice to the appStore