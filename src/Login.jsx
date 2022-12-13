import React, {useState} from "react";

export const Login = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');

    const handleSubmit = (e) => {
        e.prevent.Default();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="rhtsgh77@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input  value={email} onChange={(e) => setEmail(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button >Login</button>
        </form>
        <button className="Link-btn" onClick={() => props.onFormSwitch ('register')}>Dont have an account? Register</button>
        </div>
    )
    
}