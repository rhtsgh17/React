/* eslint-disable no-undef */
import React from "react";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { loginProses } from "../../api/auth";

export default function Login() {
    let navigate = useNavigate();
    const [payload, setPayload] = React.useState({
        email :"",
        password : "",
    })
    // const [isLoading, setIsLoading] =
    const handleChange = (e) => {
        setPayload((payload) => {
            return {
                ...payload,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit  = async(e) => {
        e.preventDefault();

        try {
            const response = await loginProses(payload);
            const data =  response.data;
            Cookies.set("myapps_token", data?.token);
            return navigate("/artikel" , {replace: true});
        }catch (err){
        console.log(err);
        }finally{
            // setIsLoading(false);
        }

        console.log('jalan' , payload);
    }
    return  (
        <>
        <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
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
         <Button 
        
        color="blue"
        title={"login"}/>
        
        </form>
       </>
    );
}