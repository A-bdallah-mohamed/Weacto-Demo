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
const [tryagainlater,settryagainlater] = useState(false)
    const navigate = useNavigate();

    const resendVerificationEmail = async () => {
        if (timer <= 0 && auth.currentUser) {
            try {
                await sendEmailVerification(auth.currentUser);
                settimer(120); // Start timer for 2 minutes
                settryagainlater(false)
                // Countdown logic
                const interval = setInterval(() => {
                    settimer((prevTimer) => {
                        if (prevTimer <= 1) {
                            clearInterval(interval);
                            return 0;
                        }
                        return prevTimer - 1;
                    });
                }, 1000);

            } catch (error) {
                if (error.code == 'auth/too-many-requests'){
                    settryagainlater(true)
                }
                console.error("Error sending email verification:", error.message);
            }
        }
    };


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
    <p>Please verify your email to continue. Once verified, click 'Confirm' below. <br /><span onClick={resendVerificationEmail} style={{cursor: timer == 0 ? 'pointer' : 'not-allowed' , textDecoration:'underline'}}>Resend</span>
    {timer > 0 && <span className='messages'><br /> next attempt in {timer}s</span>}

    {tryagainlater && <span className='messages'> <br />Too many requests have been sent. Please wait a while before trying again !</span>}

     </p>

        <button className='confirmemailbutton' onClick={confirm}>Confirm</button>
        {emailnotverified ? <div className='not'>Your email is not verified. Please verify your email.</div> : <></>}
    </div>
  )
}
