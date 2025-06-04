import { createContext, useEffect, useState } from "react";
import { toastSuccess } from "../helpers/ToastNotify";

export const WatchlistContextt = createContext();

const WatchlistContext = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => { //lazy initialization
        const savedWatchlist = localStorage.getItem("watchlist");
        return savedWatchlist ? JSON.parse(savedWatchlist) : [];
      });


      useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
      }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      toastSuccess("The movie has been added to Watchlist");
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
    toastSuccess("The movie has been removed from Watchlist")
  };

  return (
    <WatchlistContextt.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContextt.Provider>
  );
};

export default WatchlistContext;
