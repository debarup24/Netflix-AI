import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant" ; 
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from "../utils/moviesSlice"

const useMovieTrailer = (movieId) => {
const dispatch = useDispatch(); 
  
const trailerVideo = useSelector((store) => store.movies.trailerVideo);

const getMovieVideos = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS )

    const json  = await data.json();
    
 
    const filterTrailer = json.results.filter((video) => video?.type === "Trailer")
    const trailer = filterTrailer.length ? filterTrailer[0] :  json.results[0]
     
     dispatch(addTrailerVideo(trailer));  //dispatch(action)
} ;

useEffect (() => {
    !trailerVideo && getMovieVideos() ;
 }, []) ;

} 

 export default useMovieTrailer ;