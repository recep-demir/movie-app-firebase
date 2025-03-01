import React from "react";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">

      <AuthContext>
        <MovieContext>
          <AppRouter/>
          <ToastContainer/>
        </MovieContext>
      </AuthContext>
     
    </div>
  );
};

export default App;
