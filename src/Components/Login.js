import React from 'react'
import Header from "./Header"
import { useRef, useState } from "react";

const Login = () => {

  const [isSignInFrom, setSignInFrom] = useState(true);

 const toggleSignInForm = (e) => {
  e.preventDefault();
  setSignInFrom(!isSignInFrom) ;
 } ;
  return (
    <div>
      <Header/> 
      <div className='absolute'>
      <img className='bg-cover overflow-hidden h-screen w-screen aspect-square object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg" alt="Background Image" />
      </div>

     <form className='absolute items-center flex-col justify-center px-12 py-8 w-[95%] bg-black md:w-[30%] my-[70px] mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '> 
     <h1 className="font-bold text-3xl py-4">{isSignInFrom ? "Sign In" : "Sign Up"} </h1>

     {!isSignInFrom && (<input type="text"
       required
       placeholder="Full Name"
       className="px-4 py-3 rounded-md bg-transparent border-gray-500 border-solid border-[1.5px] outline-none my-4 w-full "
          /> )}

      <input type="text" placeholder='Email Address' className='px-4 py-3 rounded-md bg-transparent border-gray-500 border-solid border-[1.5px] outline-none my-4 w-full '/>

      <input type="password" placeholder='Password' className='px-4 py-3 my-4 bg-transparent border-gray-500 border-solid border-[1.5px] outline-none rounded-md w-full '/>

      <button className='px-4 py-2 my-4 w-full font-semibold transition-all duration-300 hover:bg-[#831111] bg-red-600 rounded-md'>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
      <br/>
      {isSignInFrom && ( <p className='text-center '> OR </p> )} 

      {isSignInFrom && ( <button className='px-4 py-2 my-4 w-full font-semibold transition-all duration-300 hover:bg-[#eceaea] bg-[#e2e1e1] border-gray-500 rounded-md bg-opacity-20 hover:bg-opacity-25 '>Use a sign-in code</button> ) }
      
      <p className='text-center cursor-pointer hover:underline '> Forgot password? </p>

      <p className="py-4"> {isSignInFrom ? (  <> New to Netflix?
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