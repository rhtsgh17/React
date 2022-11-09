/* eslint-disable no-undef */
import React from "react";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { loginProses } from "../../api/auth";
import { useDispatch } from "react-redux";
import {  authRegister } from "../../redux/action/authAction";


export function Register() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
   
    const [payload, setPayload] = React.useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorname, setErrorname] = React.useState("")
    const [errorEmail, setErrorEmail] = React.useState("")
    const [errorpassword, setErrorpassword] = React.useState("")
    const [errorpassword_confirmation, setErrorpassword_confirmation] = React.useState("")
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
        const response = await dispatch(authRegister(payload));
        console.log("response", response);
        if (response?.status === "Success") {
          return navigate("/artikel", { replace: true });
        } else {
          setMessageError(response?.response?.data?.message);
          setErrorname(response?.response?.data?.errors?.name);
          setErrorEmail(response?.response?.data?.errors?.email);
          setErrorpassword(response?.response?.data?.errors?.password);
          setErrorpassword_confirmation(response?.response?.data?.errors?.password_confirmation);
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
        <form onSubmit={handleSubmit} className="">
          <h1>Login form</h1>
          <p className="text-red-500"> {MessageError}</p>
         
          <p className="text-red-500">{errorEmail}</p>
         
        
          <input
            name="email"
            onChange={handleChange}
            label={"email"}
            placeholder="email"
            type="email"
            className="my-7"
          />
           <p className="text-red-500">{errorname}</p>
          <input
            name="name"
            onChange={handleChange}
            label={"name"}
            placeholder="name"
            type="name"
            className="my-7"
          />
           <p className="text-red-500">{errorpassword}</p>
          <input
            name="password"
            onChange={handleChange}
            label={"password"}
            placeholder="password"
            type="password"
            className="my-7"
          />
            <p className="text-red-500">{errorpassword_confirmation}</p>
          <input
            name="password_confirmation"
            onChange={handleChange}
            label={"password_confirmation"}
            placeholder="password_confirmation"
            type="password_confirmation"
            my-7
          />
          <Button color="blue" title={isLoading ? "nungguin ya" : "register"} />
        </form>
      </>
    );
  }
  
