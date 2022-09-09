import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import Quran from './page/Quran';
// import DetailQuran from './page/detailQuran';
function App() {
  return (
    <React.Fragment >
      <h1 className="bg-blue-400 text-white text-space-arround">Tugas Al-Quran</h1>
      
      <Routes>
        
        <Route path='/user' element ={<Quran/>}/>
        {/* <Route path='/user/:id/detail' element ={<DetailQuran/>}/> */}
        <Route path='*' element ={<Navigate to="user" replace={true}/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

