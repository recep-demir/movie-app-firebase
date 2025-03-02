import React, { useContext, useState } from "react";
import { MovieContextt } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const Main = () => {
  const { filmler,getirMovies,loading } = useContext(MovieContextt);

const[input,setInput]=useState("")

const handleSubmit=(e)=>{

  e.preventDefault()
getirMovies(
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`
);

}

const resetMovies = () =>{
  setInput("")
  getirMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`)
}


  return (
    <div>
      <form onSubmit={handleSubmit}  className="flex justify-center p-2">
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button  className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span>Loading....</span>
          </div>
        ) : (
          filmler.map((film)=><MovieCard key={film.id} {...film}/>)
        )}
      </div>
    </div>
  );
};

export default Main;
