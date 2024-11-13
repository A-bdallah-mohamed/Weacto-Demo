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

// when rediricting to another page when log/sign in is done, only render other page content when user is valid 

export default function Register() {
    const [email,setemail] = useState("")
const [password,setpassword] = useState("")
const [showpassword,setshowpassword] = useState(false)
const [emailverified,setemailverified] = useState(false)
const [invalidemail,setinvalidemail] = useState(false)
const [missingpassword,setmissingpassword] = useState(false)

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

 // break this function into smaller functions                         ----


/*  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await checkEmailVerification();
    } catch (error) {
      handleAuthError(error);
    }
  };
  
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      navigate('/Confirm-email');
      console.log("Created new account, please verify your email.");
    } catch (error) {
      console.log("Error creating new account:", error.code);
    }
  };
  
  const checkEmailVerification = async () => {
    if (auth.currentUser?.emailVerified) {
      navigate('/');
      console.log("Email is verified, thank you <3");
    } else {
      navigate('/Confirm-email');
      console.log("Account exists but email is not verified");
    }
  };
  
  const handleAuthError = (error) => {
    if (error.code === 'auth/user-not-found') {
      handleSignUp();
    } else if (error.code === 'auth/invalid-email') {
      setinvalidemail(true);
      setmissingpassword(false);
      console.log("Invalid email format");
    } else if (error.code === 'auth/missing-password') {
      setmissingpassword(true);
      setinvalidemail(false);
      console.log("Missing password");
    } else if (error.code === 'auth/missing-email') {
      setmissingpassword(true);
      console.log("Missing email");
    } else {
      console.log("Unexpected error:", error.code);
    }
  };
  
  const signin = async () => {
    setinvalidemail(false);  // Reset errors
    setmissingpassword(false);
  
    await handleSignIn();
  };
   */






 const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      if (auth.currentUser.emailVerified) {
        navigate('/');
        console.log("Email is verified, thank you <3");
      } else {
        navigate('/Confirm-email');
        console.log("Account exists but email is not verified");
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          
          await sendEmailVerification(user);
          navigate('/Confirm-email');
          console.log("Created new account, please verify your email.");
          
        } catch (createError) {
          console.log("Error creating new account:", createError.code);
        }
        
      } else if (error.code === 'auth/invalid-email') {
        setinvalidemail(true);
        setmissingpassword(false);
        console.log("Invalid email format");
        
      } else if (error.code === 'auth/missing-password') {
        setmissingpassword(true);
        setinvalidemail(false);
        console.log("Missing password");
        
      } else if (error.code === 'auth/missing-email') {
        setmissingpassword(true);
        console.log("Missing email");
        
      } else {
        console.log("Unexpected error:", error.code);
      }
    }
  };

useEffect(()=>{
    if(auth.currentUser){
        console.log(auth.currentUser.email)
    }

},[])
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
            </div>
            <button onClick={signin}>Continue</button>
     <p className='forgotpass'>Forgot password?</p>
        </div>
        <div className='designside'></div>
    </div>
  )
}
