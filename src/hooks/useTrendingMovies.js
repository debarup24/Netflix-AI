import { useEffect } from 'react'
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import {addTrendingMovies} from "../utils/moviesSlice"

const useTrendingMovies = () => {
    const dispatch = useDispatch() ;
    const TrendingMovies = useSelector((store) => store.movies.TrendingMovies);

    const getTrendingMovies = async () => {
          const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS )  // This will return a promise
    
          // now use data.json to convert the data into json for readability
          const json = await data.json();
          
           dispatch(addTrendingMovies(json.results))
    } ;
    
     useEffect (() => {
         getTrendingMovies() ;
     }, []) ;
    
}

export default useTrendingMovies ;