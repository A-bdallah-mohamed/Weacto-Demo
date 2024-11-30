import React, {useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"

import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../config/firebase'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Signinwithgoogle from '../components/Signinwithgoogle'
import Signinwithfacebook from '../components/Signinwithfacebook'
// when rediricting to another page when log/sign in is done, only render other page content when user email is valid 

export default function Signin() {
    const [email,setemail] = useState("")
const [password,setpassword] = useState("")
const [showpassword,setshowpassword] = useState(false)

const [invalidemail,setinvalidemail] = useState(false)
const [missingpassword,setmissingpassword] = useState(false)
const [wrongdata,setwrongdata] = useState(false)
const navigate = useNavigate();


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
    <div className='signinpage'>
        <div className='registerside'>
            <img src={logo}></img>
            <h1>Welcome Back!</h1>

   <Signinwithgoogle />

   <Signinwithfacebook />
        
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
              <Link to='/Register-Page'>
     <p className='forgotpass'>Create a new Account?</p>
     </Link>
     <Link to='/Password-Reset'>
     <p className='forgotpass'>Forgot password?</p>
     </Link>
     </div>
        </div>
        <div className='designside'></div>
    </div>
  )
}
