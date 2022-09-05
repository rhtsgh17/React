import React from 'react';
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import Home from './pages/home';
import Setting from './pages/setting';
import About from './pages/about';
import Detail from './pages/detail';
import NotFound from './pages/NotFound';
import Komputer from './pages/setting/komputer';
import Phone from './pages/setting/phone';
import Profile from './pages/setting/profile';
import Asus from './pages/setting/komputer/asus';
import Apple from './pages/setting/komputer/apple';
import Lenovo from './pages/setting/komputer/lenovo';
function App() {

  return (
    <React.Fragment>
      <section className='space-x-5 border py-5'>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/setting"}>Setting</Link>
        <Link to={"/about"}>About</Link> */}
        <NavLink exact to="/" style={({ isActive }) =>
          isActive ? {
            color: "red",
          }
            : undefined
        }>Home</NavLink>

        <NavLink exact to="/setting" style={({ isActive }) =>
          isActive ? {
            color: "pink",
          }
            : undefined
        }>Setting</NavLink>

        <NavLink exact to="/about" className={({ isActive }) =>
          isActive ?
            'Text-White border p-2 bg-pink-500'

            : undefined
        }>About</NavLink>


      </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setting' element={<Setting />} >
          <Route path='komputer' element={<Komputer />} >
            <Route path='lenovo' element={<Lenovo />} />
            <Route path='apple' element={<Apple />} />
            <Route path='asus' element={<Asus />} />
          </Route>
          <Route path='phone' element={<Phone />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/about/:id/:nama' element={<Detail />} />
        <Route path='/404' element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Fragment>

  );
}

export default App;

