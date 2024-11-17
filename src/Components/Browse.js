import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

   useNowplayingMovies();

  return (
    <div >
    <Header></Header>
    
    </div>
  )
}

export default Browse ;