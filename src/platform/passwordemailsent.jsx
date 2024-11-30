import React,{useState,useEffect} from 'react'
import './RegisterPage.css'
import logo from "../assets/platformimages/logo.png"

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword , sendPasswordResetEmail ,signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Passwordemailsent() {
    const navigate = useNavigate();
    const location = useLocation();
    const e_mail = location.state.e_mail || {}


  return (
    <div className='registerpage'>
    <div className='passemailsentside'>
                    <img src={logo}></img>
    
        <h1>Email sent</h1>
<h3>We sent an email to <span>{e_mail}</span>! if this email is<br /> connected to a Weacctt account, you will be able to reset your <br />password.</h3>



            <div className='buttonspassemailsent'>
            <Link to='/Password-Reset'>
                <button>Try again</button>
                </Link>
                <Link to='/Signin-Page'>
<button>Back to login</button>
</Link>
            </div>
            <div className='otheroptions'>
     </div>
    </div>
    </div>
  )
}