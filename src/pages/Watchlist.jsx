import { useContext } from "react";
import {WatchlistContextt } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContextt);

  return (
    <div>
      <h1 className="text-center text-white text-3xl p-2 mb-3">My Watchlist</h1>
      <div className="flex flex-wrap justify-center">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard {...movie} />
              
            </div>
          ))
        ) : (
          <p className="text-center text-white mt-40">No movies in watchlist</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
