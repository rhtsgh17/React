
import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/style.css";
import Input from './komponen/input'


export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault()
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      }
    })

  };
  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>

        <form style={{
          width: "54%",
        }}>

          <Input
            name={"usernama"}
            value={values.username}
            label={'Username'}
            placeholder="Username"
            onChange={(event) => {
              event.preventDefault();
              console.log('ok jalan', event.target.value)
              setValues((values) => {
                return {
                  ...values,
                  username: event.target.value,
                };
              });
            }} />
          <Input name={"email"}
            value={values.email}
            isError={true}
            label={'Email'}
            placeholder="Email"
            onChange={handleChange} />
          <Input name={"password"} value={values.password} label={'Password'} placeholder="Password"
            onChange={handleChange} />
          <Input name={"confirmPassword"} value={values.confirmPassword} label={'Confirm Password'} placeholder="ConfirmPaswword"
            onChange={handleChange} />
          <Button tittle={"Simpan"} />
        </form>
        <div style={{
          width: "50%",
          border: "1px solid green",
          height: "100vh",
        }}>
          <p>Username: {values?.username}</p>
          <p>Email: {values?.email}</p>
          <p>Password: {values?.password}</p>
          <p>ConfirmPassword: {values?.ConfirmPassword}</p>
        </div>

      </div>
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