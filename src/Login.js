import React, { useState } from 'react'
import './App.css'

function Login () {
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [Login,setLogin] = useState('false')

    const handleEmailInput = event => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }

    const handleLoginInput = () => {
        if (Email === '' && Password === 'true')
        setLogin(true)
    }

    return (

        
        <div className="signinpage">
            <h3>SignIn</h3>
            <label>Email</label>
            <br></br>
            <input type="email" value={Email} onChange={handleEmailInput} placeholder="Email"/>
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" value={Password} onchange={handlePasswordInput} placeholder="Password"/>
            <br></br>
            <button onClick={handleLoginInput}>Login</button>

        </div>
    );
}

export default Login;