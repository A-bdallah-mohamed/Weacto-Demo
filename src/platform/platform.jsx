import React,{useContext, useEffect} from 'react'
import './platform.css'
import website1image from "../assets/websitesimages/website1.jfif"
import { Link } from 'react-router-dom'
import { EditbleStateContext } from '../GlobalStates.jsx/EditbleState'
import blacklogo from '../assets/platformimages/whitecropped.png'
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
        <div className='header'>



          <div className='logocontainer'>
<img src={blacklogo} />
</div>

<div className='faqsignin'>
  <div className='faqbutton'>FAQ</div>
  <div className='regbutton'>Register</div>
</div>

        </div>

        <div className='maintitle'>
          <p>Grow Online</p>
          <p>Elevate your Brand</p>
          <button>Get Started Now</button>
          <span>-- No credit card required</span>
        </div>


<div className='templatesmainpage'>

  <div className='templatesfirst'>
    <p>Templates</p>
    <span>View All</span>
  </div>
  <div className='templatescontainer'>
    <div className='template'>this is a template</div>
    <div className='template'>this is a template</div>
    <div className='template'>this is a template</div>
  </div>
</div>




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
