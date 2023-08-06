import "./index.css";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import "./SignUp.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { setGlobalData } from './globals';

function SignUp() {


   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");
   const [goToNext, setGoToNext] = React.useState(false);


   // const [user, setUser] = useState({});

   // onAuthStateChanged(auth, (currentUser)=> {
   //    setUser(currentUser);
   // })
   const register = async () => {

      try {
         const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword);
         console.log(user)
         setGlobalData(registerEmail);
      } catch (error) {
         console.log(error.message);
      }
      setGoToNext(true);
   };

   if (goToNext) {
      return <Navigate to='/' state = {{userEmail:registerEmail}}/>
   }
   return (

      <div className="SignUpPage">
         <span className="signUp">
            Sign Up
         </span>
         <Link className="loginLink" to='/login'>  Login </Link>
         <div className="rectangle2"></div>
         <input className="name2" placeholder  ="Email" onChange = {(event) => setRegisterEmail(event.target.value)}/>
            <input className="email2" placeholder  ="Password" onChange = {(event) => setRegisterPassword(event.target.value)} />
            <button className="button3" onClick={register}  >Sign Up</button>
         <Link className="home2" to='/'>  Home </Link>

      </div>


   );
};

export default SignUp;