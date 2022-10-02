import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { detailUser, updateUser } from "../api/user";
// import Select from ".komponen./Select";

export default function UpdateUser() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "rrr",
    name: "",
    jenis_Kelamin: "",
    email: "",
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
      const response = await updateUser(id, users);
      setIsLoading(false);
      return navigate("/users");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert("terjadi error ");
    }
  };

  const getDetailUser = async () => {
    try {
      const response = await detailUser(id);

      console.log("response =>", response.data);

      const dataUser = response.data.data;
      console.log(dataUser);
      setUsers(() => {
        return {
          username: dataUser.username,
          name: dataUser.name,
          email: dataUser.email,

          jenis_Kelamin: dataUser.jenis_Kelamin,
        };
      });
    } catch (err) {}
  };

  React.useEffect(() => {
    console.log("jalan");
    getDetailUser(id);
  }, []);

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            value={users.username}
            type="text"
            placeholder="Username"
            label={"Username"}
            name={"username"}
            onChange={handleChange}
          />
          <Input
            value={users.name}
            label={"Name"}
            name={"name"}
            onChange={handleChange}
          />
          <Input
            value={users.email}
            label={"email"}
            type="email"
            name={"email"}
            onChange={handleChange}
          />

          <select>
            <option>Pilih</option>
            <option value={"Laki-laki"}>Laki-laki</option>
            <option value={"Perempuan"}>Perempuan</option>
          </select>

          <Input
            values={users.jenis_kelamin}
            label={"Jenis kelamin"}
            name={"jenis_kelamin"}
            onChange={handleChange}
          />

          <Button title={isLoading ? "sedang menyimpan" : "Perbarui"} />
          {/* <Button onClick={() => {
                return navigate (
                    
                )
            }}></Button> */}
        </div>
      </form>
    </div>
  );
}
