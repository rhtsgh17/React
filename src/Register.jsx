import React, {useState} from "react";

export const Register = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');
    const {name, setName} = useState('');

    const handleSubmit = (e) => {
        e.prevent.Default();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label for="name">Full name</label>
            <input  value={name} name="name" id="name" placeholder="full name"></input>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="rhtsgh77@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input  value={email} onChange={(e) => setEmail(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch ('register')}>alReady have an account? Login</button>
        </div>
    )
}