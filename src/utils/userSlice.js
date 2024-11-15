import { createSlice } from "@reduxjs/toolkit";


  const userSlice = createSlice({
  name: "user",
  initialState : null,
   
   reducers : {
      addUser : (state, action) => { 
         return action.payload; // return something from here means initial state will become 'action.payload' which was null initially
      },
      removeUser : (state, action) => {
        return null;
      }
   }
  });

  export const { addUser, removeUser } = userSlice.actions ;
  export default userSlice.reducer ;