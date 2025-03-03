import React from 'react'
import Navbar from "../components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Watchlist from '../pages/Watchlist';

const AppRouter = () => {
  return (
    <>
<Navbar/>

<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="" element={<PrivateRouter/>}>
  <Route path="/details/:id" element={<MovieDetail/>}/>
  <Route path="/watchlist" element={<Watchlist />} />
  
</Route>

</Routes>

    </>
  )
}

export default AppRouter