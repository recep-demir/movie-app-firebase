import React, { useContext } from 'react'
import { AuthContextt } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { WatchlistContextt } from '../context/WatchlistContext';

const MovieCard = ({id,title,overview,poster_path,vote_average}) => {
  const {addToWatchlist, removeFromWatchlist, watchlist } = useContext(WatchlistContextt)
  
const {currentUser}=useContext(AuthContextt)

const navigate=useNavigate()

const isInWatchlist = watchlist.some((movie) => movie.id === id);


  return (
    <div
      onClick={() => navigate("/details/" + id)}
      className="movie relative"
      id="container"
    >
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
      />
      {currentUser && (<button
  className={`absolute top-2 right-2 ${
    isInWatchlist ? "bg-red-600 hover:bg-red-800" : "bg-black hover:bg-gray-700"
  } text-white p-2 rounded-full text-lg transition duration-300 ease-in-out mb-4`}
  onClick={(e) => {
    e.stopPropagation(); // Detay sayfasına gitmeyi engeller
    isInWatchlist ? removeFromWatchlist(id) : addToWatchlist({ id, title, poster_path, vote_average });
  }}
>
  {isInWatchlist ? "➖" : "➕"}
</button>
)}
      

      <div className="flex align-baseline justify-between p-1 text-white">
        <h5> {title}</h5>
        
        {currentUser && (
          <span className={`tag ${vote_average > 7 ? "green" : vote_average > 6.8 ? "orange" : "red" }`}>
            {vote_average.toFixed(2)}
          </span>


        )
        }
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview} </p>
      </div>
    </div>
  );
}

export default MovieCard