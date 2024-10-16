import React,{useContext, useEffect} from 'react'
import Website1 from '../websites/website1/website1'
import './platform.css'
import website1image from "../assets/websitesimages/website1.jfif"
import { Link } from 'react-router-dom'
import { EditbleStateContext } from '../GlobalStates.jsx/EditbleState'
import blacklogo from '../assets/platformimages/blackcropped.png'
import { LuLayoutTemplate } from "react-icons/lu";
import { IoPricetag } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

// clicking logo go to top of home page 

export default function Platform() {

  const {editable,seteditable} = useContext(EditbleStateContext)
useEffect(()=>{
console.log(editable)
},[])
const handleeditclick = () => {
  seteditable(true)
}
const handleviewclick = () => {
  seteditable(false)
}
  return (
    <div className='platformmainpage'>
      
      <div className='platformcontainer'>
        <header>



          <div className='logocontainer'>
<img src={blacklogo} />
<p>Weacctt</p>
</div>

<ul>
  <li className='li1'><LuLayoutTemplate /><p>Templates</p></li>
  <li className='li2'><IoPricetag  /><p>Pricing</p></li>
  <li className='li3'><BiSupport /><p>Support</p></li>
</ul>

<div className='faqsignin'>
  <div className='faqbutton'>FAQ</div>
  <div className='regbutton'>Register</div>
</div>

        </header>
      </div>





















   <div className='buttons'>
   <Link to='/landingpage1' onClick={handleviewclick}>
   <button className='viewbutton websitebutton'>View</button>
   </Link>
   <Link to='/landingpage1' onClick={handleeditclick}>
   <button className='editbutton websitebutton' >Edit</button>
   </Link>
   </div>
   
    </div>
  )
}
