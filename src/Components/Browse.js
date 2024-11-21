import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

   useNowPlayingMovies();
   useTrendingMovies();
   usePopularMovies() ;
   useUpcomingMovies();
  return (
    <div >
    <Header/>
    <GptSearch/>
     <MainContainer />
     <SecondaryContainer /> 
    
    </div>
  )
}

export default Browse ;