import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[45%] md:pt-[12%] flex justify-center">
   <form className="md:w-1/2 w-full m-2 px-2 rounded-lg bg-opacity-70 bg-black grid grid-cols-12" > 
    <input type='text' className='p-4 m-4 col-span-9 outline-none rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>

    <button  className="py-2 col-span-3 my-4 mx-1 px-3 rounded-lg bg-[#ff0b0b] text-white text-center font-bold" >{lang[langKey].AISearchBtn}</button>

   </form>

    </div>
  )
}

export default GptSearchBar