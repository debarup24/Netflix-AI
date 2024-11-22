import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { logo, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice'
import lang from "../utils/LanguageConstant";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
   const dispatch = useDispatch() ;
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);
      
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful. navigate to home page 
     
    }).catch((error) => {
      // An error happened.
       navigate("/");
    });
  }

  // once an event that's why useEffect
 useEffect ( () => { 
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    // sign in case : 
    if (user) {
      // User is signed in, get user over here -
        const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL , }));
      // after sign in redirect/navigate user to main browse/content page - 
         navigate("/browse");

      // update the store 
        
    } 
    // sign out case :
    else {
      // User is signed out
        dispatch(removeUser()) ;
      // after sign out redirect/navigate user to main login page -
        navigate("/") ;  
    }
  });
   // unsubscribe the (onAuthStateChanged), when header component unloads  unsubscribe component unmount
   return () => unsubscribe();
 }, []) ; 

 const handleGptSearchClick = () => {
   // toggle gpt search
    dispatch(toggleGptSearchView()) ;
   
 }
      // on select of a lang it will trigger an event 
 const handleLanguageChange = (e) => {
     dispatch (changeLanguage(e.target.value)) ;
  
}
  
  return (
  
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className='w-44 mx-auto md:mx-0'
      src={logo} alt="logo" /> 

    
    <div className="right flex">
        <div className="flex mr-1 my-3 justify-between lg:justify-around md:justify-around lg:py-5 md:py-5 lg:px-0 md:px-0">
           <div className=" w-auto bg-[#111112] bg-opacity-40 text-white mx-4 
             lg:px-5 md:px-1 px-3 py-1 rounded-md border-[1.5px] sm:w- border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 items-center ">

             <select name="" id=""  className=' bg-transparent outline-none' onChange={handleLanguageChange}  >
             {SUPPORTED_LANGUAGES.map((lang) => (
                <option className='bg-black bg-opacity-90' key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))} 
         
              </select>
          </div>
          { !user && <div> <button className=' flex-col md:flex-row w-24 bg-[#e50815] hover:bg-[#851a21] text-white px-4 py-1 justify-around rounded-lg font-bold  lg:px-1 md:px-0'>{lang[langKey].doSignIn}
             </button> </div> }

       </div> 

       { user && 
       <div className="py-2 px-2 text-white font-bold rounded-lg min-w-fit duration-150 flex items-center gap-1">
         <div>
          <button className='flex-col max-w-screen md:flex-row w-20 md:w-32 bg-slate-600 bg-opacity-40 hover:text-red-600 text-white px-4 py-1 justify-around rounded-lg font-bold  lg:px-1 md:px-0 -ml-4 gap-2' onClick={handleGptSearchClick}
          > 🔍 {lang[langKey].AISearchBtn}</button>
         </div> 

            <img
              className='md:h-7 h-5 object-cover aspect-square ml-3'
              src = {user.photoURL}
              alt="user icon"
            />
            <button
              onClick={handleSignOut}
              className=" flex-col hover:text-red-600 font-bold text-white mx-1 border-[1.5px] sm:w- border-gray-600 hover:ring-2 lg:px-5 md:px-1 px-3 py-1 rounded-md "
            >
             {lang[langKey].doSignOut}
            </button>
          </div> }

    </div>

    </div>
  )
}

export default Header