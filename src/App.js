import React from "react";

import Button from "./komponen/Button"
import "./styles/style.css";
import Input from './komponen/Input'
import Card from "./komponen/Card";


export default function App() {
  const [values, setValues] = React.useState({
    judul: "",
    catatan: "",
   });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    e.preventDefault()
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.judul]: e.target.value,
      }
    });
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.judul]: false,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.judul]: true,
      })
    }

  };


  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.judul]: true,
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
        judul:"",
        catatan:"",
       
    }
    })
  };

  console.log('errors', errors);

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <h1>satu</h1>
        {/* <form
          onSubmit={handleSubmit}

          style={{
            width: "54%",
          }}>

          <Input
            isError={errors?.judul}
            textError={'wajibdiisi'}
            name={"username"}
            value={values.judul}
            label={'Username'}
            placeholder="Username"
            onBlur={handleBlur}
            onChange={(event) => {
              event.preventDefault();
              console.log('gas lah jalan', event.target.value)
              setValues((values) => {
                return {
                  ...values,
                  judul: event.target.value,
                };
              });
            }} />
          <Input
            isError={errors?.catatan}
            textError={'wajib diisi'}
            name={"email"}
            value={values.catatan}

            label={'Email'}
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange} />
         <Button tittle={"Simpan"} />
        </form> */}
        {/* <div style={{
          width: "50%",
          border: "1px solid green",
          height: "100vh",
        }}>

          <Card data={data} setData={setData}/>
        </div> */}

      </div>
    </React.Fragment>
  )
}



