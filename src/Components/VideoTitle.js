import React from 'react'
import { useSelector } from 'react-redux';
import lang from "../utils/LanguageConstant";

const VideoTitle = ({title, overview}) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-4xl text-2xl font-bold'>{title}</h1>
        <p className='py-6 hidden md:inline-block text-md w-1/3'>{overview}</p>
        <div className='flex items-center max-w-fit py-4 md:py-0' >
            <button className='bg-white opacity-75 font-semibold hover:bg-opacity-50 duration-150 text-lg md:text-xl rounded-lg text-black px-4 md:px-12 py-2 md:py-4'>▶ {lang[langKey].btnPlay}</button>
            <button className='bg-gray-500 hidden md:inline-block mx-2 text-xl bg-opacity-55 rounded-lg text-white px-12 p-4 hover:bg-opacity-25 duration-150' > ⓘ {lang[langKey].btnMoreInfo}</button>
        </div>
    </div>
  )
};

export default VideoTitle;