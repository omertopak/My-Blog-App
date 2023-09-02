import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivateRouter from './PrivateRouter';
import About from '../pages/About';
import Detail from '../pages/Detail';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ink' element={<PrivateRouter />}>
          <Route path="" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="about" element={<About />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter



