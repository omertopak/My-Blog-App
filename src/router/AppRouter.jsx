import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import BlogCard from '../components/BlogCard'
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='' element={<Register />} />
        <Route path='blog' element={<PrivateRouter/>}>
          <Route path='/' element={<Home />} />
          <Route path='' element={<BlogCard />} />

        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter