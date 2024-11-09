import React, {useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"
import googlelogo from "../assets/platformimages/Google-Symbol.png"
import applelogo from "../assets/platformimages/Apple-Logo.png"
import {createUserWithEmailAndPassword , sendEmailVerification} from 'firebase/auth'
import { auth } from '../config/firebase'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

// when rediricting to another page when log/sign in is done, only render other page content when user is valid 

export default function Register() {
    const [email,setemail] = useState()
const [password,setpassword] = useState()
const [showpassword,setshowpassword] = useState(false)
const [emailverified,setemailverified] = useState(false)
const [invalidemail,setinvalidemail] = useState(false)
const [missingpassword,setmissingpassword] = useState(false)

const navigate = useNavigate();

const  signin = async () => {
   try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        console.log("email is validddddd")
        setinvalidemail(false)
navigate('/Confirm-email    ')
   }
 catch(error){
    if(error.code === 'auth/invalid-email'){
        setinvalidemail(true)
        console.log(error.code)
        setmissingpassword(false)
    }
    else if(error.code === 'auth/missing-password'){
        setmissingpassword(true)
        setinvalidemail(false)
    }
    else{
        console.log(error.code)
    }
 }   
}

useEffect(()=>{
if(auth.currentUser){
    console.log(auth.currentUser.email)
}
else{
    console.log("no user")
}
},[email])
const toggleshowpassword = () => {
    setshowpassword(showpassword => !showpassword)
}
  return (
    <div className='registerpage'>
        <div className='registerside'>
            <img src={logo}></img>
            <h1>Create your free account</h1>
            <div className='googlesignin'>
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
            </div>
            <button onClick={signin}>Continue</button>
            <p>Already have an account? <span>Log in</span></p>
        </div>
        <div className='designside'></div>
    </div>
  )
}
