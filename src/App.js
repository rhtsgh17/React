import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import User from './page/User';
import UpdateUser from './page/UpdateUser';
import DetailUser from './page/detailUser';
import CreateUser from './page/CreateUser';
function App() {
  return (
    <React.Fragment>
      <h1 className="bg-orange-400 flex items-center justify-center">Belajar API</h1>
      <Routes>
        
        <Route path='/user' element ={<User/>}/>
        <Route path='/user/:id/detail' element ={<DetailUser/>}/>
        <Route path='/user/create' element ={<CreateUser/>}/>
        <Route path='/user/update/:id' element ={<UpdateUser/>}/>
        <Route path='*' element ={<Navigate to="user" replace={true}/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

