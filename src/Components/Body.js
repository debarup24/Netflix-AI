import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch() ;

 const appRouter = createBrowserRouter([
    {
        path:  "/" ,
        element : <Login/> ,
    },
    {
        path:  "/browse" ,
        element : <Browse/> ,
    },
 ])
  // once an event that's why useEffect
 useEffect ( () => { 
  onAuthStateChanged(auth, (user) => {
    // sign in case : 
    if (user) {
      // User is signed in, get user over here -
        const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}));
      // after sign in redirect/navigate user to main browse/content page - 
         

      // update the store 
        
    } 
    // sign out case :
    else {
      // User is signed out
        dispatch(removeUser()) ;
      // after sign out redirect/navigate user to main login page -
        //navigate("/") ; can't use navigate without <router provider> 
    }
  });
 }, []) ; 

  return (
    <div>
         <RouterProvider router = {appRouter} /> 
    </div>
  )
}

export default Body