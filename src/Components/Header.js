import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-screen z-10 px-5 md:px-8 py-2 bg-gradient-to-b flex flex-col md:justify-between md:flex-row from-black'>
      <img className='w-44 mx-auto md:mx-0 bg-gradient-to-b flex flex-col md:justify-between md:flex-row from-black'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" /> 

    <div className="right">
       <div className="flex mr-32 my-4 justify-between lg:justify-around md:justify-around lg:py-5 md:py-5 lg:px-0 md:px-0">
           <div className=" w-auto bg-[#111112] bg-opacity-40 text-white mx-4 
             lg:px-5 md:px-2 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 items-center ">

             <select name="" id=""  className=' bg-transparent outline-none' /*onChange={languageHandler*/  >
                <option value="English" className='bg-black bg-opacity-90'>English</option>
                 <option value="हिन्दी" className='bg-black bg-opacity-90'>हिन्दी</option>
              </select>
          </div>
            <button className=' w-24 bg-[#e50815] hover:bg-[#a34c52] text-white px-5 py-1 rounded-lg font-bold  lg:px-1 md:px-1'>Sign In
             </button>
       </div>
    </div>

      
    </div>
  )
}

export default Header