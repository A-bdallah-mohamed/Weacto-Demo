import React,{useContext, useEffect} from 'react'
import Website1 from '../websites/website1/website1'
import './platform.css'
import website1image from "../assets/websitesimages/website1.jfif"
import { Link } from 'react-router-dom'
import { EditbleStateContext } from '../GlobalStates.jsx/EditbleState'

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
        <div className='websiteborder'>
    
            <div className='websiteimagecontainer'>

              <Link to="/landingpage1">
   <img className='websiteimage' src={website1image}></img>
   </Link>
   
   </div>
   <div className='testzip'>
    <h>Hi</h>
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
    </div>
  )
}
