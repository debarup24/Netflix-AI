import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBG = ({movieId}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVidero)
   const dispatch = useDispatch(); 

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1034541/videos?language=en-US', API_OPTIONS )

      const json  = await data.json();
      console.log(json);
   
      const filterTrailer = json.results.filter((video) => video?.type === "Trailer")
      const trailer = filterTrailer.length ? filterTrailer[0] :  json.results[0]
       console.log(trailer);
       dispatch(addTrailerVideo);  //dispatch(action)
  } ;

  useEffect (() => {
    getMovieVideos() ;
   }, []) ;

  return (
    <div className=" w-screen md:w-screen">
      <iframe  className="w-screen aspect-video"
      // width="560" 
      // height="315" 
      src= {
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player" 
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
      
      </div>
  )
}

export default VideoBG;