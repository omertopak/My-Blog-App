import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivateRouter from './PrivateRouter';
import About from '../pages/About';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<PrivateRouter />}>
          <Route path='' element={<Header/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter



