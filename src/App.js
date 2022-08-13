import React from "react";
// import Layout from "./komponen/layout";
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

    setValues((values) => {
      return {
        username: "",
        email: "",
        TanggalLahir: "",
        tempatLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: "",
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
            name={"Tanggal Lahir"}
            value={values.TanggalLahir}

            label={'Tanggal Lahir'}
            placeholder="Tanggal lahir"
            onBlur={handleBlur}
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"TempatLahir"}
            value={values.tempatLahir}

            label={'TempatLahir'}
            placeholder="tempatLahir"
            onBlur={handleBlur}
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"Jeniskelamin"}
            value={values.jenisKelamin}

            label={'Jeniskelamin'}
            placeholder="Jeniskelamin"
            onBlur={handleBlur}
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"password"} 
            value={values.password} 
            label={'Password'} 
            placeholder="Password"
            onChange={handleChange} />
          <Input
            isError={errors?.username}
            textError={'wajib diisi'}
            name={"confirmPassword"} 
            value={values.confirmPassword} 
            label={'Confirm Password'} 
            placeholder="ConfirmPaswword"
            onChange={handleChange} />
          
            <Button title={"Reset"} />
            <Button type={"simpan"} title={"Simpan"}/>

        </form>
        <div style={{
          width: "50%",
          border: "1px solid green",
          height: "100vh",
        }}>

          <Card data={data} setData={setData} />
        </div>

      </div>
    </React.Fragment>
  )
}




// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama