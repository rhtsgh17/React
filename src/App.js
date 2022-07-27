// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from "./Komponen/header";
import Tes from "./Komponen/Module/tes"
import {Input,Button} from "./Komponen/Named";
function App() {
  return (
    <React.Fragment>
      <h1>Latihan Export Import</h1>
      <Header/>
      <Tes/>
      <Input/>
      <Button/>
    </React.Fragment>
  );
}

export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama