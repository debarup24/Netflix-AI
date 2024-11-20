import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice" ;
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"

const appStore = configureStore({ 
    // we’ll add slices inside it 
    reducer : { 
        // name : nameReducer
        user : userReducer ,
        movies: moviesReducer,
        gpt : gptReducer ,
    },

  }) ; 

  export default appStore ; 
