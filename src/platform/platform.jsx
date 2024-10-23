import React,{useContext, useEffect} from 'react'
import './platform.css'
import { TbHexagonLetterW } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { EditbleStateContext } from '../GlobalStates.jsx/EditbleState'
import { LuLayoutTemplate } from "react-icons/lu";
import { IoPricetag } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";
import { IoMdPaperPlane } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import logo from "../assets/platformimages/logo.png"
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
    <div className='platform'>
    <div className='platformmainpage'>
      
      <div className='container firstpage'>
        <div className='header'>



          <div className='logocontainer'>
  <img src={logo}/>

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
    <div className='template'><p>E-commerce</p></div>
    <div className='template'><p>Portfolio</p></div>
    <div className='template'><p>Blogs</p></div>
  </div>
</div>




      </div>



<div className='container secondpage'>
<p className='maintextsecondpage'>
  We do the work, <br />You stay focused on your customers.</p>
  <div className='sectionssecondpage'>
    <div className='section'>
<LuPencilLine />
<span>Build</span>

<p>Choose from +50 Customizable <br />Templates, import your data,<br />no design or coding needed.
</p>
    </div>
<div className='section'>
<IoMdPaperPlane />
<span>Launch</span>
<p>Once your click launch <br />after 2-3 days, you recieve your <br />Website URL
</p>
    </div>
    <div className='section'>
<IoMdTrendingUp />
<span>Grow</span>
<p>Youre done! <br />Daily insights <br />And revenue per click!
</p>
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
    </div>
  )
}
