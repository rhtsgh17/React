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

// import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <h1>Latihan Export Import</h1>
//     </React.Fragment>
//   );
// }

// export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama


// import React from "react";
// import Produk from "./latihan-1"

// function App() {
//   let [produk, setProduk] = React.useState ([
//     {
//       jenis:"Elektronik",
//       produk:"Handphone",
//       brand: [
//         {nama:"Samsung",
//         harga:"Rp. 1.000.000",
//     },
//       {
//         nama:"Xiomi",
//         harga:"5.000.000",
//       },
//       ],

//     },
//     {
//       jenis:"Transportasi",
//       produk:"mobil",
//       brand: [
//         {
//           nama:"Toyota",
//           harga:"1.000.000.000",
//         },
//         {
//           nama:"Honda",
//           harga:"500.000.000",
//         },
//       ],
//     },
//   ]);

//   return(
//     <React.Fragment>
//       <h1>Latihan-1</h1>
//       <Produk data={produk}/>
//     </React.Fragment>
//   );
// }

// export default App;

import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/style.css"

function App() {
  return (<React.Fragment>
    <h1>Belajar Props 2</h1>
    <Layout>
      <h1>Smk MQ</h1>
    </Layout>
    <Layout>
      <h1>Smk IDN</h1>
    </Layout>
    <Layout>
      <h1>Smk 1 cibinong</h1>
    </Layout>
    <Button onClick={() => {
      console.log("button ini diklik")
    }} tittle={'simpan'} />
    <Button onClick={() => {
      console.log("button ini batal")
    }}
    disabled={true}
    tittle={'batal'} />
    <Button color="green" tittle={"update"} />
  </React.Fragment>)
}

export default App;