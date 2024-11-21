import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    
  return (
    <div className="p-6 relative overflow-x-scroll hide-scrollbar md:hide-scrollbar space-x-4"  style={{ scrollBehavior: "smooth" }} > 
       <div>
         <h1 className="font-semibold text-white text-2xl md:text-3xl py-4">{title} </h1>
           </div>
        <div className="flex space-x-4 mt-5" style={{ width: "max-content" }}> 
         {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
            
        </div>
    </div>
  )
}

export default MovieList ;