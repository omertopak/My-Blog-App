import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='ink' element={<PrivateRouter />}>
          <Route path='' element={<Header />}>
            <Route index element={<Home />} />
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter



