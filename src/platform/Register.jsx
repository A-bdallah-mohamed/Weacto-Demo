import React,{useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"
import Signinwithfacebook from '../components/Signinwithfacebook';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword , sendEmailVerification , signInWithEmailAndPassword  , fetchSignInMethodsForEmail ,signOut , GoogleAuthProvider , signInWithPopup , OAuthProvider } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom';
import Signinwithgoogle from '../components/Signinwithgoogle'
export default function Register() {
    const navigate = useNavigate();
    const [invalidemail,setinvalidemail] = useState(false)
const [missingpassword,setmissingpassword] = useState(false)
    const [email,setemail] = useState("")
const [password,setpassword] = useState("")
    const [showpassword,setshowpassword] = useState(false)
    const [emailinuse,setemailinuse] = useState(false)
const toggleshowpassword = () => {
    setshowpassword(showpassword => !showpassword)
}
const logout = async () => {
    try {
       await signOut(auth);
       console.log("User signed out successfully.");
console.log(auth.currentUser.email)
    } catch (error) {
       console.error("Error signing out:", error);
    }
 };


 const register = async () => {
    let success = false;
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        setmissingpassword(false)
        setinvalidemail(false)
        setemailinuse(false)
   
        navigate('/Confirm-email')
    }
    catch(error){
         if(error.code === 'auth/missing-password'){
            setmissingpassword(true)
            setinvalidemail(false)
          }
          else if(error.code === 'auth/invalid-email'){
            setinvalidemail(true)
            setmissingpassword(false)
          }
          else if(error.code === 'auth/email-already-in-use'){
            setemailinuse(true)
          }
          else{
            console.log(error)
          }
    }

 }
 useEffect(()=>{
    if(auth.currentUser){
        console.log(auth.currentUser.email)
    }

 },[email])
  return (
    <div className='registerpage'>
    <div className='registerside'>
                    <img src={logo}></img>
            <h1>Welcome To Weacctt</h1>
<Signinwithgoogle />

<Signinwithfacebook />
            <div className='or'>or</div>
            <input  placeholder='Enter email address or Phone number' onChange={(e)=>setemail(e.target.value)}/>
            {invalidemail &&  <div className='emailinvalid'> <MdErrorOutline />Invalid email format!</div> }
          
            <div className='paasswordinput'>
            <input  placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} type={`${showpassword ? 'text' : 'password'}`} />
            {showpassword ?     <AiFillEyeInvisible className='visibleicon' onClick={toggleshowpassword}/> :  <AiFillEye className='visibleicon' onClick={toggleshowpassword}/>}
            {missingpassword &&  <div className='emailinvalid'> <MdErrorOutline />Missing password!</div> }
            {emailinuse &&  <div className='emailinvalid'> <MdErrorOutline />Email already exists!</div> }
          
            </div>
            <button onClick={register}>Continue</button>
            <div className='otheroptions'>
              <Link to='/Signin-Page'>
     <p className='forgotpass'>Already a member? Log in</p>
     </Link>
     </div>
    </div>
    </div>
  )
}