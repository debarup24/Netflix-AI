import React from 'react'
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from '../utils/constant'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="bg-cover h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
        <div className="absolute bg-black bg-opacity-20 w-full h-full -z-10"></div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch ; 