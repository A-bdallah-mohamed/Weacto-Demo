import React from 'react'
import { LuExternalLink } from "react-icons/lu";
import { VscTerminalTmux } from "react-icons/vsc";
import { MdLaptopChromebook } from "react-icons/md";
import { MdOutlineArtTrack } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import './website1.css';
import { Link } from 'react-router-dom';
import { useRef , useState , useEffect } from 'react';
import UseChangetext from '../../custom hooks/UseChangetext';
import Form from '../../components/Form';

export default function Website1({editable , seteditable}) {

  const textstylecomponent = (changetexthook) => {
    return {
      fontWeight : changetexthook.boldchecked.boolean ? 'bold' : 'none'
      ,fontStyle :changetexthook.italicchecked.boolean ? 'italic' : ''
      ,textDecoration : changetexthook.underlinechecked.boolean ? 'underline' : 'none'
      ,fontSize : `${changetexthook.fontsize}px`
      ,color: changetexthook.Color
    }
  }
const [position,setposition] = useState({x:0,y:0})
const [formvisible,setformvisible] = useState(false)
const items = [
  {text:"OtherWebsiteName.com",datatype:"text"},
  {text:"work",datatype:"button"},
  {text:"Copy",datatype:"button"}
]
const [selectedelment,setselectedelment] = useState(items)
const [selectedItemId,setselectedItemId] = useState()
  const handleclick = (e,id) => {
    setposition({ x: e.clientX, y: e.clientY });
    setformvisible(true);
    setselectedItemId(id)
    setselectedelment(items[id-1])
};
const itemTexts = items.map((item) => ({
  ...item,
  textState: UseChangetext(item.text, editable, setformvisible),

}));
const functions = [];
for(let i=0 ; i<items.length ; i++){
const item = items[i]
functions[i] = UseChangetext(item.text,setformvisible,item.icon)
}
const styles = [];
for(let i=0 ; i<items.length ; i++){
const item = items[i]
styles[i] = textstylecomponent(functions[i])
}
  return (
    
<div className='website1container'>
{(formvisible && editable)  && <Form newtext={functions[selectedItemId]} position={position} formvisible={formvisible} setformvisible={setformvisible}  datatype={itemTexts[selectedItemId].datatype} editable={editable}/>}

    <div className='website1'>
    <div className='homepage'>
      <header>
<div>
  <p onClick={(e)=>handleclick(e,0)} style={styles[0]}>{functions[0].text}</p>

  {editable && ( <button>Copy</button>) }
  <button onClick={(e)=>handleclick(e,1)} style={styles[1]}>{functions[1].text}</button>
</div>
<ul>
  <li>LinkedIN</li>
  <span>/</span>
  <li>Dribble</li>
  <span>/</span>
  <li>Instagram</li>
</ul>
      </header>
      <div className='mainsection'>
        <div className='imagecontainer'>
      <div className='image' style={{backgroundImage:'url(https://i.pinimg.com/736x/99/e8/14/99e814c1ca80a8402a25b5ddd26b43b4.jpg)'}}></div>
      <div className='textonimage'>Content Name</div>
      </div>
<div className='maintext'>
      <h1>Building digital<br/>products, brands, and<br/>experience.</h1>
      </div>
  <button>Learn more <LuExternalLink /></button>
      </div>
    </div>
    <div className='seconddiv'>
<div className='seconddivcomponentscontainer'>
  <div className='logoscontainer'>
<img className='logo' src='https://logowik.com/content/uploads/images/adobe-black8153.jpg'></img>
<img className='logo' src='https://freevectorlogo.net/wp-content/uploads/2013/01/coca-cola-black-logo-vector.png  '></img>
<img className='logo' src='https://1000marcas.net/wp-content/uploads/2020/11/Roblox-Logo-tumb.png'></img>
<img className='logo' src='https://i.pinimg.com/originals/c0/75/bf/c075bf9d6066fae5edd8079ac3ec0a8d.png'></img>
<img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnt4hRi0NPASgiFadfQbO0zQnEPEayhODkeg&s'></img>
<img className='logo' src='https://logo.com/image-cdn/images/kts928pd/production/2a0d10c1af158209eb3afb9a2c0feef549cc87b9-1600x900.png?w=1920&q=72&fm=webp'></img>
  </div>
</div>
    </div>
    <div className='thirddiv'>
      <div className='thirdcomponents'>
<h1>Collaborate with brands and agencies<br /> to create impactful results</h1>
<div className='button2lines'>
  <button>Results</button>
</div>

<div className='departments'>
    <div className='department'>
<VscTerminalTmux  className='deplogo'/>
<h5>UI & UX</h5>
<p>Designing interfaces that are<br />intuitive, efficient and<br />enjoyable to use.</p>
    </div>
    <div className='department'>
<MdLaptopChromebook className='deplogo' />
<h5>Web & Mobile app</h5>
<p>Transforming ideas into<br />exceptional web and mobile<br />app experiences.</p>
    </div>
    <div className='department'>
<MdOutlineArtTrack className='deplogo' />
<h5>Design & Creative</h5>
<p>Crafting visually stunning<br />designs that connect with your<br />audience.</p>
    </div>
    <div className='department'>
<MdDeveloperBoard className='deplogo' />
<h5>Development</h5>
<p>Bringing your vision to life with<br />the latest technology and<br />design trends.</p>
    </div>
  </div>
      </div>
      </div>
      <div className='fourthdiv'>
<div className='fourthfirst'>
        <LiaHandshake className='handshake'/>
        <h1>Tell me about your next<br/>project</h1>
 <div className='buttonscontainer'><button className='button1'><LuExternalLink /> Email me</button ><button className='button2'>Whatsapp</button>  </div>
 </div>
 <div className='fourthsecond'>
  <div>© 2024 All right reserved</div>
  
<ul>
  <li>LinkedIN</li>
  <span>/</span>
  <li>Dribble</li>
  <span>/</span>
  <li>Instagram</li>
</ul>
 </div>
      </div>
</div>

</div>
  )
}
