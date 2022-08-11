
import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./styles/style.css";
import Input from './komponen/input'
import Card from "./komponen/card";


export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    e.preventDefault()
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      }
    });
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: true,
      })
    }

  };


  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        }
      })
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('from tersubmit');

    values.id = new Date().getMinutes()
    setData((data) => {
      return [...data, values];
    });

    setValues((values)=>{
      return{
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
    })
  };

  console.log('errors', errors);

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>

        <form
          onSubmit={handleSubmit}

          style={{
            width: "54%",
          }}>

          <Input
            isError={errors?.username}
            textError={'wajibdiisi'}
            name={"username"}
            value={values.username}
            label={'Username'}
            placeholder="Username"
            onBlur={handleBlur}
            onChange={(event) => {
              event.preventDefault();
              console.log('gas lah jalan', event.target.value)
              setValues((values) => {
                return {
                  ...values,
                  username: event.target.value,
                };
              });
            }} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"email"}
            value={values.email}

            label={'Email'}
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"password"} value={values.password} label={'Password'} placeholder="Password"
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"confirmPassword"} value={values.confirmPassword} label={'Confirm Password'} placeholder="ConfirmPaswword"
            onChange={handleChange} />
          <Button tittle={"Simpan"} />
        </form>
        <div style={{
          width: "50%",
          border: "1px solid green",
          height: "100vh",
        }}>

          <Card data={data} setData={setData}/>
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