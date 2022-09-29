import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Select from ".komponen./Select";

export default function UpdateUser() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  let [errorMessage, setErrorMessage] = React.useState('')
  const [error, setError] = React.useState({})
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    jenis_Kelamin: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://belajar-react.smkmadinatulquran.sch.id/api/users/create",
        users
      );
      setIsLoading(false);
      // return navigate ('/users')
    } catch (err) { 

      console.log(err);
      setError(err?.response?.data?.errors);
      setIsLoading(false)
      
      setErrorMessage('Periksa input kembali')
    }
  };
  console.log ("error be", error);
  return (
    <div>
      <h1>Tambah User</h1>
      <p className="text-pink-500">{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            values={users.username}
            label={"Username"}
            name={"username"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.username?.[0]}</p>
          <Input
            values={users.name}
            label={"Name"}
            name={"name"}
            onChange={handleChange}
          />
           <p className="text-red-500">{error?.name?.[0]}</p>
          <Input
            values={users.email}
            label={"email"}
            type="email"
            name={"email"}
            onChange={handleChange}
          />
          <p className="text-red-500">{error?.email?.[0]}</p>
          <select>
            <option>Pilih</option>
            <option value={"Laki-laki"}>Laki-laki</option>
            <option value={"Perempuan"}>Perempuan</option>
          </select>
          {/* <p className="text-red-500">{error?.username?.[0]}</p> */}
          <Input
            values={users.jenis_kelamin}
            label={"Jenis kelamin"}
            name={"jenis_kelamin"}
            onChange={handleChange}
          />
           <p className="text-red-500">{error?.jenis_Kelamin?.[0]}</p>
          <Input
            values={users.password}
            label={"Password"}
            name={"password"}
            onChange={handleChange}
          />
           <p className="text-red-500">{error?.password?.[0]}</p>
          <Input
            values={users.password_confirmation}
            label={"Password confirmation"}
            name={"password_confirmation"}
            onChange={handleChange}
          />
           <p className="text-red-500">{error?.password_confirmation?.[0]}</p>
          <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
            {/* <Button onClick={() => {
                return navigate (
                    
                )
            }}></Button> */}
        </div>
      </form>
    </div>
  );
}
