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
import Accordioncomponent from '../components/accordioncomponent';
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";


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
  <div className='faqbutton'>Contact Us</div>
  <div className='faqbutton'>Register</div>
</div>

        </div>

        <div className='maintitle'>
          <p>Grow Online</p>
          <p>Elevate your Brand</p>
          <button>Get Started Now</button>
          <span>Free Trial – No Credit Card Required</span>
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
Your online presence, <br />done and ready to grow.</p>
  <div className='sectionssecondpage'>
    <div className='section'>
<LuPencilLine className='icons'/>
<span>Build</span>

<p>Choose from +50 Customizable <br />Templates, import your data,<br />no coding or design needed.
</p>
    </div>
<div className='section'>
<IoMdPaperPlane className='icons'/>
<span>Launch</span>
<p>Once you submit <br />after 2-3 days, you recieve your <br />Website URL Ready to use
</p>
    </div>
    <div className='section'>
<IoMdTrendingUp className='icons'/>
<span>Grow</span>
<p>Youre done! <br />Daily insights <br />revenue per click!
</p>
    </div>
  </div>

</div>



<div className='container fourth'>

  <div className='pricings'>
  <p>Plans</p>
    <div className='basicprices'>
      <div className='firstprice'>
      <div className='basicprice'>
<div className='planname'>Basic</div>
<div className='subplantext'>No minimum commitment,<br /> pause or cancel anytime.</div>
<div className='including'>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Access to standard templates</div>
  </div>
  <div>
  <div className='unchecked'><IoCloseSharp  /></div>
  <div className='includingtext'>Access to premium templates</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Basic customization options</div>
  </div>

  <div>
  <div className='unchecked'><IoCloseSharp /></div>
  <div className='includingtext'>Advanced customization options</div>
  </div>

  <div>
  <div className='unchecked'><IoCloseSharp  /></div>
  <div className='includingtext'>Analytics and performance tracking</div>
  </div>
  <div>
  <div className='unchecked'><IoCloseSharp  /></div>
  <div className='includingtext'>Additional storage and bandwidth</div>
  </div>
</div>
<div className='price'>$3<sup>/Month</sup></div>
<button>Get Started</button>
</div>
<div className='note firstnote'>
  - 1 Month Free-Trial<br />- No Credit Card Required
</div>
      </div>
<div className='firstprice'>
  
<div className='note secondnote'>
Best choice for online stores.
</div>
<div className='basicprice'>
  
<div className='planname'>Premium</div>
<div className='subplantext'>No minimum commitment,<br /> pause or cancel anytime.</div>
<div className='including'>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Access to standard templates</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Access to premium templates</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Basic customization options</div>
  </div>

  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Advanced customization options</div>
  </div>

  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Analytics and performance tracking</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Additional storage and bandwidth</div>
  </div>
</div>
<div className='price'>$5<sup>/Month</sup></div>
<button>Get Started</button>
</div>
</div>
<div className='basicprice'><div className='planname'>Premium</div>
<div className='subplantext'>No minimum commitment,<br /> pause or cancel anytime.</div>
<div className='including'>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Access to standard templates</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Access to premium templates</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Basic customization options</div>
  </div>

  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Advanced customization options</div>
  </div>

  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Analytics and performance tracking</div>
  </div>
  <div>
  <div className='checked'><FaCheck /></div>
  <div className='includingtext'>Additional storage and bandwidth</div>
  </div>
</div>
<div className='price'>$42<sup>/Year</sup></div>
<button>Get Started</button>
<div className='save'>Save 30%!</div>
</div>
    </div>
    <div className='permcont'>
      <div className='permnote'><span><span>Click Here! SAVE 30% Per year!</span> 
$84/Year</span>
      </div>
    <div className='permaprice'>
<div className='permaleft'><div className='planname'>Innovate Plan<span>Tailored features based on individual business needs</span></div>
<div className='customadvntgs'><div className='checked'><FaCheck /></div>
<div className='includingtext'>24-Hour Dedicated Support</div>
<div className='checked'><FaCheck /></div>
<div className='includingtext'>Money-Back Guarantee</div>
<div className='checked'><FaCheck /></div>
<div className='includingtext'>Unlimited Custom Feature Requests</div></div>
</div>
<div className='permaright'><div className='price'>$10<sup>/Month</sup></div>
<button>Get Started</button></div>
    </div>
    </div>
  </div>
</div>

<div className='container third'>
  <h1>We’ve got all the answers you’re looking for!</h1>
<Accordioncomponent maintext="First" subtext="first sub text"/>
<Accordioncomponent maintext="First" subtext="first sub text"/>
</div>


<footer>
  <div className='footercontent'>
    <div className='footerup'>
      <h1>BLOG</h1>
      <h1>EXPLORE MORE</h1>
      <h1>KNOW MORE</h1>
      <h1>ABOUT</h1>
    </div>
    <div className='linebetween' />
    <div className='footerdown'>
      <p>© 2024 Weacctt. All rights reserved.</p>
      <div className='socials'>
      <FaFacebook className='social'/>
<BiLogoInstagramAlt className='social'/>
<RiTwitterXLine className='social'/>
      </div>
    </div>
  </div>
</footer>








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
