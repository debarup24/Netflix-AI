import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'

const Browse = () => {

const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS )  // This will return a promise

      // now use data.json to convert the data into json rod readability
      const json = await data.json();
      console.log(json) ;
} ;

 useEffect (() => {
  getNowPlayingMovies() ;
 }, []) ;

  return (
    <div >
    <Header></Header>
    
    </div>
  )
}

export default Browse