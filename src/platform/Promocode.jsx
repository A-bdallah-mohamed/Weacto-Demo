import React,{useState} from 'react'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
export default function Promocode() {
  const [plantimeM,setplantimeM] = useState(true)
  return (
    
   
<div className='container promopage'>

<div className='pricings'>
<p>Your promo code has been applied! Enjoy a <span>40% discount</span> on our plans and<br /> get started with your website today.</p>
<div className='plantimecontainer'>
<div className='plantime'>
  {/* state for plan time selector toggle and add a classname conditional rendering */}
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
<div className='price'>{plantimeM ? '$2.8' : '$27'}<sup>/{plantimeM ? 'Month' : 'Year'}</sup></div>
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
<div className='price'>{plantimeM ? '$4.49' : '$43'}<sup>/{plantimeM ? 'Month' : 'Year'}</sup></div>
<button>Get Started</button>
</div>
</div>

  </div>
 
</div>
</div>


  )
}
