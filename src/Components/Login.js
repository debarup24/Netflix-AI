import React from 'react'
import Header from "./Header"
import { useRef, useState } from "react";
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constant';


const Login = () => {

  const [isSignInForm, setSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

 const toggleSignInForm = (e) => {
  e.preventDefault();
  setSignInFrom(!isSignInForm) ;
 } ;

 const handleButtonClick = (e) => {
      // validate the form data 
      e.preventDefault();
      const message = checkValidData(email.current.value, password.current.value,  name.current?.value,
        isSignInForm)
      setErrorMessage(message) ;

      if (message) return;

      // sign in or sign up
      if (!isSignInForm) {
        //sign up logic
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  
  // after creating the user profile, now updating the user  
    updateProfile(user, {
      displayName: name.current.value , photoURL: USER_AVATAR, 
    }).then(() => {
      // Profile updated!
       const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUser({
          uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });

    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage) ;
    
  });
   }
     else {
       //sign in logic 
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
  });

     } 
   };

  return (
    <div>
      <Header/> 
      <div className='absolute'>
      <img className='bg-cover overflow-hidden h-screen w-screen aspect-square object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg" alt="Background Image" />
      </div>

     <form className='absolute items-center flex-col justify-center px-12 py-8 w-[95%] bg-black md:w-[30%] my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '> 
     <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"} </h1>

     {!isSignInForm && (<input type="text" ref={name}
       required
       placeholder="Full Name"
       className="px-4 py-3 rounded-md bg-transparent border-gray-500 border-solid border-[1.5px] outline-none my-4 w-full "
          /> )}

      <input type="text" ref={email} placeholder='Email Address' className='px-4 py-3 rounded-md bg-transparent border-gray-500 border-solid border-[1.5px] outline-none my-4 w-full '/>

      <input type="password" ref={password} placeholder='Password' className='px-4 py-3 my-4 bg-transparent border-gray-500 border-solid border-[1.5px] outline-none rounded-md w-full '/>
      
      <p className="text-red-600 font-bold">{errorMessage}</p>
    {/* sign in sign up button -  */}
      <button className='px-4 py-2 my-4 w-full font-semibold transition-all duration-300 hover:bg-[#831111] bg-red-600 rounded-md' 
       onClick={handleButtonClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <br/>

      <p className='text-center'> OR </p> 

      {isSignInForm && ( <button className='px-4 py-2 my-4 w-full font-semibold transition-all duration-300 hover:bg-[#eceaea] bg-[#e2e1e1] border-gray-500 rounded-md bg-opacity-20 hover:bg-opacity-25 '>Use a sign-in code</button> ) }
      
      <p className='text-center cursor-pointer hover:underline p-1 m-1'> {isSignInForm ? "Forgot password?" : "Sign In with Mobile"} </p>

      <p className="py-4"> {isSignInForm ? (  <> New to Netflix?
            <button
                className="font-bold hover:underline mx-1"  onClick={toggleSignInForm}
              >
                Sign Up Now
              </button> </>) : (  <>  Already Registered?
            <button
                className="font-bold hover:underline mx-1"  onClick={toggleSignInForm}
              >
                Sign In Now
              </button> </>)}
           
              </p>
     </form>

    </div>
  )
}

export default Login