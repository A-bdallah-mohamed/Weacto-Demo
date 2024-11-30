import React from 'react'
import {FacebookAuthProvider, signInWithPopup} from 'firebase/auth'
import applelogo from "../assets/platformimages/Facebook_Logo_2023.png"
import {auth} from '../config/firebase'
import { useNavigate } from 'react-router-dom';
export default function Signinwithfacebook() {

    const navigate = useNavigate();

    const provider = new FacebookAuthProvider();

    const signinwithapple = async () => {
        try {
           const result = await signInWithPopup(auth , provider)
 const user =  result.user 
 console.log(user)
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className='applesignin googlesignin ' onClick={signinwithapple}>
                <img src={applelogo} />
                <h2>Sign in With Facebook</h2>
            </div>
  )
}
