import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";
import WatchlistProvider, { WatchlistContext } from "./context/WatchlistContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContext>
        <MovieContext>
          <WatchlistProvider>
          <AppRouter />
          </WatchlistProvider>
          <ToastContainer />
        </MovieContext>
      </AuthContext>
    </div>
  );
};

export default App;
