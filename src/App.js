import React from "react";
import AuthContext from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">

      <AuthContext>
        
          <AppRouter/>
          <ToastContainer/>
        
      </AuthContext>
     
    </div>
  );
};

export default App;
