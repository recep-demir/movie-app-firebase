import React from "react";

import Register from "./pages/Register";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">

      <AuthContext>
        <MovieContext>
          


        </MovieContext>
      </AuthContext>
     
    </div>
  );
};

export default App;
