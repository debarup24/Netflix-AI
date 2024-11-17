import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice" ;
import moviesReducer from "./moviesSlice"

const appStore = configureStore({ 
    // we’ll add slices inside it 
    reducer : { 
        user : userReducer ,
        movies: moviesReducer,
    },

  }) ; 

  export default appStore ; 
