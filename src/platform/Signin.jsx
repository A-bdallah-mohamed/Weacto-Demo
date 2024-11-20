import React, {useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"
import googlelogo from "../assets/platformimages/Google-Symbol.png"
import applelogo from "../assets/platformimages/Apple-Logo.png"
import {createUserWithEmailAndPassword , sendEmailVerification , signInWithEmailAndPassword  , fetchSignInMethodsForEmail ,signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { create } from '@mui/material/styles/createTransitions'

// when rediricting to another page when log/sign in is done, only render other page content when user is valid 

export default function Signin() {
    const [email,setemail] = useState("")
const [password,setpassword] = useState("")
const [showpassword,setshowpassword] = useState(false)

const [invalidemail,setinvalidemail] = useState(false)
const [missingpassword,setmissingpassword] = useState(false)
const [wrongdata,setwrongdata] = useState(false)
const navigate = useNavigate();

const logout = async () => {
    try {
       await signOut(auth);
       console.log("User signed out successfully.");
console.log(auth.currentUser.email)
    } catch (error) {
       console.error("Error signing out:", error);
    }
 };

 useEffect(()=>{
  if(auth.currentUser){
    console.log(auth.currentUser.email)
  }

 },[email])


const signin = async () => {
  try {
    await signInWithEmailAndPassword(auth,email,password);
    setmissingpassword(false)
    setinvalidemail(false)
    setwrongdata(false)
    if(auth.currentUser.emailVerified){
      navigate('/')
      console.log('email is verified')
    }
    else {
      navigate('/Confirm-email')
    }
  }
  catch(error){
    console.log(error.code)
    if(error.code === 'auth/invalid-credential'){
      console.log('wrong email or password')
      setwrongdata(true)
      setmissingpassword(false)
      setinvalidemail(false)
    }
    else if(error.code === 'auth/missing-password'){
      setmissingpassword(true)
      setwrongdata(false)
      setinvalidemail(false)
    }
    else if(error.code === 'auth/invalid-email'){
      setinvalidemail(true)
      setwrongdata(false)
      setmissingpassword(false)
    }
  }
}

/* 

 const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // try signing in
      
      if (auth.currentUser.emailVerified) {   // if email is verified then navigate to the mmain page
        navigate('/');
        console.log("Email is verified, thank you <3");
      } else {                                 // if not verified navigate to email confirmation page
        navigate('/Confirm-email');
        console.log("Account exists but email is not verified");
      }
    } catch (error) {                         // if catched error while signing in 
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {   //if the error is acc not found or wrong info
        try {                        // then try to create a new account
    
          console.log("no account matches");
          
        } catch (createError) {
          if (createError.code === 'auth/weak-password'){
            setweakpassword(true)
            console.log("Error creating new account:", createError.code);
          }
    else{
      console.log("Unexpected error:", createError.code);
    }
        }
        
      }  else if (error.code === 'auth/missing-email') {
        setmissingpassword(true);
        console.log("Missing email");
        
      } else if (error.code === 'auth/invalid-email') {
        setinvalidemail(true);
        setmissingpassword(false);
        console.log("Invalid email format");
        
      } else if (error.code === 'auth/missing-password') {
        setmissingpassword(true);
        setinvalidemail(false);
        console.log("Missing password");
        
      } else {
        console.log("Unexpected error:", error.code);
      }
    }
  }; */

useEffect(()=>{
    if(auth.currentUser){
        console.log(auth.currentUser.email)
    }
console.log(wrongdata)
},[email])
const toggleshowpassword = () => {
    setshowpassword(showpassword => !showpassword)
}
  return (
    <div className='registerpage'>
        <div className='registerside'>
            <img src={logo}></img>
            <h1>Create your free account</h1>
            <div className='googlesignin' onClick={logout}>
                <img src={googlelogo}/>
                <h2>Sign in With Google</h2>
            </div>
            <div className='applesignin googlesignin '>
                <img src={applelogo} />
                <h2>Sign in With Apple</h2>
            </div>
            <div className='or'>or</div>
            <input  placeholder='Enter email address or Phone number' onChange={(e)=>setemail(e.target.value)}/>
            {invalidemail &&  <div className='emailinvalid'> <MdErrorOutline />Invalid email format!</div> }
          
            <div className='paasswordinput'>
            <input  placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} type={`${showpassword ? 'text' : 'password'}`} />
            {showpassword ?     <AiFillEyeInvisible className='visibleicon' onClick={toggleshowpassword}/> :  <AiFillEye className='visibleicon' onClick={toggleshowpassword}/>}
            {missingpassword &&  <div className='emailinvalid'> <MdErrorOutline />Missing password!</div> }
            {wrongdata &&  <div className='emailinvalid'> <MdErrorOutline />Wrong email or password!</div> }
            </div>
            <button onClick={signin}>Continue</button>
            <div className='otheroptions'>
     <p className='forgotpass'>Already have an Account?</p>
     <p className='forgotpass'>Forgot password?</p>
     </div>
        </div>
        <div className='designside'></div>
    </div>
  )
}
