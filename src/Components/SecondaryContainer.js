import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import lang from "../utils/LanguageConstant";

const SecondaryContainer = () => {
 // get movies data from the store - 
 const movies = useSelector((store) => store.movies);
 const langKey = useSelector((store) => store.config.lang);

  return (
     movies && (
    <div className=" bg-black ">
      <div className="md:-mt-56 mt-0 md:pl-12 pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={lang[langKey].TrendingMovie} movies={movies.TrendingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
        
      </div>
    </div> )
  )
}

export default SecondaryContainer ;