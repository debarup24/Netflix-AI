import { useEffect } from 'react'
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../utils/moviesSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch() ;
    

    const getNowPlayingMovies = async () => {
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS )  // This will return a promise
    
          // now use data.json to convert the data into json for readability
          const json = await data.json();
          console.log(json) ;
           dispatch(addNowPlayingMovies(json.results))
    } ;
    
     useEffect (() => {
      getNowPlayingMovies() ;
     }, []) ;
    
}

export default useNowPlayingMovies ;