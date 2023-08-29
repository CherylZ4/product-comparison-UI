import "./index.css";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config';
import { setGlobalData } from "./globals";

function Login() {


    // const [user, setUser] = useState({});
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [goToNext, setGoToNext] = React.useState(false);

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // })

    const login = async () =>{
       
        try {
            const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
            setGlobalData(loginEmail);
            console.log(user)
        }catch(error){
            console.log(error.message);
        }
        setGoToNext(true);
       
    };
   
    if (goToNext) {
        return <Navigate to='/' state = {{userEmail:loginEmail}}/>
    }

    return (
        <div className="Login">
            <span className="signIn">
                Sign In
            </span>
            <Link className="SignUp" to='/signUp'>  Sign Up </Link>
            <div className="rectangle"></div>
            <input className="name" placeholder  ="Email" onChange = {(event) => setLoginEmail(event.target.value)}/>
            <input className="email" placeholder  ="Password" onChange = {(event) => setLoginPassword(event.target.value)} />
            <button className="button2" onClick={login}  >Login</button>
            <Link className="home" to='/'>  Home </Link>
            {/* {user.email} */}
        </div>



    );

};

export default Login;