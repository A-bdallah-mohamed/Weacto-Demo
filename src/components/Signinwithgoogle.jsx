import React from 'react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import googlelogo from "../assets/platformimages/Google-Symbol.png"
import {auth} from '../config/firebase'
import { useNavigate } from 'react-router-dom';
export default function Signinwithgoogle() {

    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const signinwithgoogle = async () => {
        try {
            const result = await signInWithPopup(auth , provider)
            const user = result.user
            console.log('User Info:', user);
            navigate('/')
        }
        catch(Error){
            console.log(Error)
        }
    }
  return (
    <div className='googlesignin' onClick={signinwithgoogle}>
    <img src={googlelogo}/>
    <h2>Sign in With Google</h2>
</div>
  )
}
