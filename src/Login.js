import React from 'react'
import './App.css'

function Login () {
    return (
        <div className="signinpage">
            <h3>SignIn</h3>
            <label>Email</label>
            <br></br>
            <input type="email" placeholder="Email"/>
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" placeholder="Password"/>
            <br></br>
            <button>Login</button>

        </div>
    );
}

export default Login;