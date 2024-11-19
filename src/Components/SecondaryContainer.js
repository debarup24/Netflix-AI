import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
 // get movies data from the store - 
 const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="md:-mt-56 mt-0 md:pl-12 pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer ;