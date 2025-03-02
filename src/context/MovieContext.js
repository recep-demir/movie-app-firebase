import axios from 'axios';
import React, {createContext, useEffect, useState } from 'react'

export const MovieContextt = createContext()

const MovieContext = ({children}) => {
  const [filmler, setFilmler] = useState([]);
  const [loading, setLoad] = useState(false);
  const [input,setInput] = useState("")
  
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`; 
  
  
  const getirMovies = (API) =>{
    setLoad(true)
    axios
      .get(API)
      .then((res) => setFilmler(res.data.results))
      .catch((err) => console.log(err)).finally(()=>setLoad(false))
  };

  useEffect(() => {
    getirMovies(BASE_URL);
  }, []);

  const resetMovies = (API) =>{
    setInput("")
    getirMovies(BASE_URL)
  }
  return (
    <MovieContextt.Provider 
    value={{filmler, getirMovies,loading,resetMovies,input,setInput}}
    >
      {children}
    </MovieContextt.Provider>
  )
}

export default MovieContext