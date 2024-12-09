import React,{useEffect, useState} from 'react'
import './platform.css'
import { Link } from 'react-router-dom'
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
import { auth } from '../config/firebase';
import {signOut} from 'firebase/auth'
import { MdDiscount } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Database, ref, update } from "firebase/database";
import {database} from "../config/firebase.jsx"
// clicking logo go to top of home page 
export default function Platform() {
  const navigate = useNavigate();
  const [promocode,setpromocode] = useState(null)
const [plantimeM,setplantimeM] = useState(true)
  const [accountdropdown,setaccountdropdown] = useState(false)
const [account,setaccount] = useState(null) 
  const toggleaccountdropdown = () => {
    setaccountdropdown(a => !a)
  }
useEffect(()=>{
  auth.onAuthStateChanged((user) => {
    setaccount(user);
   console.log(account)
  });
},[auth])
const signout = async () => {
try{
  await signOut(auth)
}
  catch(error){
    console.log(error)
  }
}

const enterpromocode = () => {
  if(promocode == 'abdola'){
    navigate('/Promo-code-prices')
  }
}
const addoneshit = (email,shittype) => {
  const safeEmail = email.replace(/[.#$[\]@]/g, "_");
update(ref(database,`Users/${safeEmail}`),{
  shit:shittype,
  cart:'cart items'
})
console.log('added shit')

}


  return (
    <div className='platform'>
  <div className='platformmainpage'>  
      <div className='container firstpage'>
        <div className='header'>
  <img src={logo} className='logo'/>
<div className='faqsignin'>
  <div className='faqbutton'>Contact Us</div>
  {account 
  ?   (
  <div className='faqbutton'><div onClick={toggleaccountdropdown}>My account</div>
  <div className={`accountdropdown ${accountdropdown && 'dropdownactive'}`}>
  <Link to="/My-Account" ><div className='dropdownitem'>Account</div></Link>
<div className='dropdownitem'>settings</div>
<div className='dropdownitem' onClick={signout}>Log out</div>
    </div>
    </div> )
  :  
 ( <Link to="/Register-Page" > <div className='faqbutton'>Register</div>  </Link>)}
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
  <p>Start today and elevate your brand.</p>
  <h6>Starting from only $3.49 per month — Cancel anytime.</h6>
<h5 className='enjoy'>Enjoy<span> 20% savings</span> on all yearly plans.</h5>
  <div className='plantimecontainer'>
  <div className='plantime'>
    <div className={` plantimeselector ${plantimeM ? 'monthly' : 'yearly'}`}/>
    <h5 onClick={()=>{setplantimeM(true)}} style={{ color: plantimeM ? 'white' : undefined }}
>Monthly</h5>
    <h5 onClick={()=>{setplantimeM(false)}} style={{ color: plantimeM ? undefined : 'white' }}
    >Yearly</h5>
    </div>
  </div>
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
<div className='price'>{plantimeM ? '$3.49' : '$33'}<sup>/{plantimeM ? 'Month' : 'Year'}</sup></div>
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
<div className='price'>{plantimeM ? '$5.49' : '$52'}<sup>/{plantimeM ? 'Month' : 'Year'}</sup></div>
<button>Get Started</button>
</div>
</div>
    </div>
    <div className='promocontainer'>
<div className='promo'>
  <span><MdDiscount />
 <span>Have a promo code ?</span> </span>
 <div className='promoinputbutton'>
 <input placeholder='enter your promo code' onChange={(e)=>setpromocode(e.target.value)}/> 
 <button onClick={enterpromocode}>Apply</button>
 </div>
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
    </div>
    </div>
  )
}
