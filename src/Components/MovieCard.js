import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;

  return (
    <div className="md:w-48 w-40 pr-4">
       <img  className="object-cover cursor-pointer rounded-lg min-h-full transform hover:scale-110 transition duration-300 ease-in-out"
       alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard