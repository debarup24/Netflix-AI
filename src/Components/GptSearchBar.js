import Openai from '../utils/Openai';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";

import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  // get data from the input-box 
    const searchText = useRef(null) ; 

    const dispatch = useDispatch();
      
    // Searching movie in TMDB 
    const searchMovieTMDB = async (movie) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch data from TMDB');
        }
  
        const json = await response.json();
        return json.results || []; // Ensure it returns an array even if undefined
      } catch (error) {
        console.error("Error fetching TMDB data:", error);
        return []; // Return an empty array on error
      }
    };

    const handleGptSearchClick = async () => {
      try {
        const model = Openai.getGenerativeModel({ model: "gemini-1.5-flash" });
    // make an API call to Open AI API to get the Movie result
      console.log(model) ; 

     const gptQuery = "Act as a movie recommendation system and suggest some  movies based on - " + searchText.current.value + " " + " Provide unique and varied results each time, and avoid repeating previously suggested movies." + "and only give the name of 3 movies, comma separated  like the example result given ahed. Example result : Dhoom 3, stree 2, Sholay, Badrinath ki dulhania" ;

     const result = await model.generateContent(gptQuery);

     if (!result || !result.response || !result.response.candidates.length) {
      console.error("No result returned from Gemini API");
      return; // Handle no results case
    }
    const getMovies =
    result.response.candidates[0]?.content?.parts[0]?.text?.split(",") || []; // Default to an empty array

  const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie.trim())); // Trim movie names

  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);

  dispatch(addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResults }));

} catch (error) {
  console.error("Error during GPT search:", error);
}
};
  
 
  return (
    <div className="pt-[45%] md:pt-[12%] flex justify-center">

   <form ref={searchText} className="md:w-1/2 w-full m-2 px-2 rounded-lg bg-opacity-70 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()} > 
    <input type='text' className='p-4 m-4 col-span-9 outline-none rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>

    <button  className="py-2 col-span-3 my-4 mx-1 px-3 rounded-lg bg-[#ff0b0b] text-white text-center font-bold" onClick={handleGptSearchClick} >{lang[langKey].AISearchBtn}</button>

   </form>

    </div>
  )
}

export default GptSearchBar