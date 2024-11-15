import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js" ;

const appStore = configureStore({ 
    // we’ll add slices inside it 
    reducer : { 
        user : userReducer ,
    },

  }) ; 

  export default appStore ; 
