import React from 'react'
import Website1 from '../websites/website1/website1'
import './platform.css'
import website1image from "../assets/websitesimages/website1.jfif"
import { Link } from 'react-router-dom'
export default function Platform({editable , seteditable}) {
  
  return (
    <div className='platformmainpage'>
        <div className='websiteborder'>
    
            <div className='websiteimagecontainer'>

              <Link to="/landingpage1">
   <img className='websiteimage' src={website1image}></img>
   </Link>
   
   </div>
   <div className='buttons'>
   <Link to='/landingpage1'>
   <button className='viewbutton websitebutton'>View</button>
   </Link>
   <Link to='/landingpage1' onClick={() => seteditable(true)}>
   <button className='editbutton websitebutton' >Edit</button>
   </Link>
   </div>
        </div>
    </div>
  )
}
