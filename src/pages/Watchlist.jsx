import { useContext } from "react";
import {WatchlistContextt } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContextt);

  return (
    <div>
      <h1 className="text-center text-2xl p-4">My Watchlist</h1>
      <div className="flex flex-wrap justify-center">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard {...movie} />
              
            </div>
          ))
        ) : (
          <p className="text-center">No movies in watchlist</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
