
import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/style.css";


export default function App(){
  let [nama, setNama] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [ConfirmPassword, setConfirmPassword] = React.useState("");
  return(
    <React.Fragment>
      </React.Fragment>
  )
}




// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   return (
//     <React.Fragment>
//       <h1>Count={count}</h1>
//       <Button onClick={handleTambah} tittle="Tambah" color="blue" />
//       <Button disabled={count <= 0 ? true : false} onClick={handleKurang} tittle="Kurang" color="green" />
//       <Button  disabled={count <= 0 ? true : false}
//       onClick={() => {
//         setCount(0);
//       }} tittle="Reset" />
//     </React.Fragment>)
// }

// export default App;