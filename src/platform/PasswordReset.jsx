import React,{useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"
import googlelogo from "../assets/platformimages/Google-Symbol.png"
import applelogo from "../assets/platformimages/Apple-Logo.png"
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword , sendPasswordResetEmail ,signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function PasswordReset() {
    const navigate = useNavigate();

    const [invalidemail,setinvalidemail] = useState(false)
    const [email,setemail] = useState(null)
    const [showpassword,setshowpassword] = useState(false)
    const [emailnotinuse,setemailnotinuse] = useState(false)
const [missingemail,setmissingemail] = useState(false)

const toggleshowpassword = () => {
    setshowpassword(showpassword => !showpassword)
}

const sendPasswordResetLink = async () => {
    try {
      // Call Firebase's sendPasswordResetEmail function
      await sendPasswordResetEmail(auth, email);
      setemailnotinuse(false);
      setinvalidemail(false);
      setmissingemail(false)
      console.log("Reset password email sent");
      navigate('/Password-Reset-email-sent',{state:{e_mail: email}})
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setinvalidemail(true);
        console.log("Invalid email");
      } else if (error.code === "auth/user-not-found") {
        setemailnotinuse(true);
        console.log("User not found");
      } else if(error.code === 'auth/missing-email)'){
        setmissingemail(true)
      }
    }
  };

useEffect(()=>{
console.log(email)
},[email])
  return (
    <div className='registerpage'>
    <div className='registerside'>
                    <img src={logo}></img>
    
        <h1>let's find your Waecctt account</h1>
        <h4>Please enter your email</h4>
            <input  placeholder='Enter email address' onChange={(e)=>setemail(e.target.value)}/>
            {invalidemail &&  <div className='emailinvalid'> <MdErrorOutline />Invalid email format!</div> }
            {emailnotinuse &&  <div className='emailinvalid'> <MdErrorOutline />No user found with this email.</div> }
          

            <button onClick={sendPasswordResetLink}>Search</button>
            <div className='otheroptions'>
     </div>
    </div>
    </div>
  )
}