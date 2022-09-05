import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import Register from "./pages/register";
import Login from "./pages/login";

 function App() {
  return (
    <React.Fragment>
   

    <Routes>

    <Route path='/' element={<Login />} ></Route>
    <Route path='login' element={<Login />} ></Route>
     <Route path='register' element={<Register />} ></Route>
    
    </Routes>
       
    </React.Fragment>
  
  );
}

export default App;
