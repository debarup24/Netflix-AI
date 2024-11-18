import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';

const MainContainer = () => {
 //movie data come from redux store using selector 
   const movies = useSelector((store) => store.movies?.nowPlayingMovies);  // '?' optional chaining -- if NowPlayingMovies is empty it will throw an error
    
   if(!movies) return;

   const mainMovie = movies[1] ;

   const {original_title, overview, id} = mainMovie ;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBG movieId={id} />
        
    </div>
  )
}

export default MainContainer ; 