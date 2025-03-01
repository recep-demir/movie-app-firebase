import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'

const AppRouter = () => {
  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Main/>}/>
      

      </Routes>



    </div>
  )
}

export default AppRouter