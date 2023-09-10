import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivateRouter from './PrivateRouter';
import About from '../pages/About';
import Detail from '../pages/Detail';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Bio from '../components/Bio';
import Password from '../components/Password';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route element={<PrivateRouter />}> */}
          <Route element={<Header />}>
            <Route path="ink" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="about" element={<About />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path="profile" element={<Profile />} >
              <Route index element={<Bio/>}/>
              <Route path="password" element={<Password/>}/>
            </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter



