import React from 'react'
import './RegisterPage.css'
import { LuMailWarning } from "react-icons/lu";
import {sendEmailVerification} from 'firebase/auth'

//import auth ,,, chech the email in current user in auth ,,, resend the email to it ,,, 
// since resending process completed display a timer of 2 minutes beside the span and disable clicking the span in while

export default function Confirmemail() {

    const resendverificationemail = () =>{

    }

  return (
    <div className='confirmpage'><LuMailWarning className='emailicon'/>
    <h1>Verify your email</h1>
    <p>Please verify your email to continue. Once verified, click 'Confirm' below. <span>Resend</span></p>

        <button className='confirmemailbutton'>Confirm</button>
    </div>
  )
}
