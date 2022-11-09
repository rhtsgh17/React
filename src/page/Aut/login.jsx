/* eslint-disable no-undef */
import React from "react";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { loginProses } from "../../api/auth";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/action/authAction";



export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [MessageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        return navigate("/artikel", { replace: true });
      } else {
        setMessageError(response?.response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    console.log("jalan", payload);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <p>{MessageError}</p>
        <input
          name="email"
          onChange={handleChange}
          label={"email"}
          placeholder="email"
          type="email"
        />

        <input
          name="password"
          onChange={handleChange}
          label={"password"}
          placeholder="password"
          type="password"
        />
        <Button color="blue" title={isLoading ? "Nungguin ya" : "login"} />
      </form>
    </>
  );
}

