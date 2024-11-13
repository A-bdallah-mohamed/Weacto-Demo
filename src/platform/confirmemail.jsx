import React, { useEffect, useState } from 'react'
import './RegisterPage.css'
import { LuMailWarning } from "react-icons/lu";
import {sendEmailVerification} from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';
//import auth ,,, chech the email in current user in auth ,,, resend the email to it ,,, 
// since resending process completed display a timer of 2 minutes beside the span and disable clicking the span in while

export default function Confirmemail() {


    const [timer,settimer] = useState(0)
    const [istimerup,setistimerup] = useState(false)
const [emailnotverified,setemailnotverified] = useState(false)
    const navigate = useNavigate();

    const resendverificationemail = () =>{
        if(timer <= 0){
            sendEmailVerification(auth.currentUser);
            
 setistimerup(true)
 settimer(120)
  for(let i =0 ; i<120;i++){
   setTimeout(() => {
    settimer(timer => timer - 1)
  },i * 1000);
  }
        }

    }


/* useEffect(()=>{
console.log(auth.currentUser.email)
},[]) */


    const confirm = () => {
if(auth.currentUser.emailVerified){
    setemailnotverified(false)
navigate('/')
}
else{
    setemailnotverified(true)
}
    }
  return (
    <div className='confirmpage'><LuMailWarning className='emailicon'/>
    <h1>Verify your email</h1>
    <p>Please verify your email to continue. Once verified, click 'Confirm' below. <br /><span onClick={resendverificationemail} style={{cursor: timer == 0 ? 'pointer' : 'not-allowed' , textDecoration:'underline'}}>Resend </span>
    {timer > 0 && <p> next attempt in {timer}s</p>}
     </p>

        <button className='confirmemailbutton' onClick={confirm}>Confirm</button>
        {emailnotverified ? <div className='not'>Your email is not verified. Please verify your email.</div> : <></>}
    </div>
  )
}
