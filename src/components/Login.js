import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase"; 

import "../styles/Login.css"

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInput = e => {
        setEmail(e.target.value)
    }

    const passwordInput = e => {
        setPassword(e.target.value)
    }

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
               history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        // it successfully created a user with email and password
        .then(auth => {
            if (auth) {
                history.push("/")
            }
        })
        .catch(error => alert(error .message))
        
    }

    return (
        <div className="login">
            <Link to="/">
                 <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={emailInput}/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordInput}/>

                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>

                    <p>By signing-in you agree to Leon"s Amazon clone Conditions of Use & Sale. 
                    Please see my Privacy Notice, my Cookies Notice and my Interest-Based Ads Notice.</p>

                    <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
