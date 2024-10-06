import React, { useEffect, useRef, useState } from 'react';
import './forms.css';
import { FaArrowRight } from "react-icons/fa";
import useMeasure from 'react-use-measure';
import UseIntersection from '../custom hooks/UseIntersection';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





// Add dragin feature             -important !!


export default function Form({
  newtext, position,setposition,formvisible, setformvisible, datatype, editable, setselectedItemId
}) {

  const fontsizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  const handleSubmit = (e) => {
    e.preventDefault();
    newtext.handlesubmit();
  };

 const [form,isformshown] = UseIntersection()

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [dragging , setdragging] = useState(false)

const [dragOffset,setdragOffset] = useState({x:0,y:0})

const handleonmousedown = (e) => {
  const offsetX = e.nativeEvent.offsetX;
  const offsetY = e.nativeEvent.offsetY;
  setdragOffset({
    x:offsetX,
    y:offsetY
  })
}
  const  mousedownhandle = (e) => {
    setposition({x:e.clientX -  dragOffset.x , y : (e.clientY - dragOffset.y) + 10})


setdragging(true)
  } 

  const  mousemovehandle = (e) => {

    setdragging(true)
    setposition({x:e.clientX -  dragOffset.x , y : (e.clientY- dragOffset.y) + 10})
  } 
  
  const  mouseuphandle = (e) => {
    setposition({x:e.clientX -  dragOffset.x , y : e.clientY- dragOffset.y})
    setdragging(false)

  } 

  return (

  
   <FormControl ref={form} className={`formtext ${isformshown && 'formshown'}`} style={{ left: position.x, top: position.y, position: 'absolute'}}>
   
      <div onClick={() => setformvisible(false)} className='closelogo'>X</div>
      <div>
        

      </div>
      <div className='dragabble' draggable={true} onMouseDown={(e)=>handleonmousedown(e)} onDragCapture={(e)=>mousedownhandle(e)} onDrag={(e)=>mousemovehandle(e)} onDragEnd={(e)=>mouseuphandle(e)}/>

      { datatype === "button" ? <div className='fakecontent'>
      <label htmlFor='text' style={{ marginBottom: "15px" }}>
        "{newtext.text}" {datatype}
      </label>
      <div className='container'>
      <div className='inputnbutton'>
        <label htmlFor='text'> Text
        <input onChange={(e) => newtext.handlechange(e)}  placeholder={newtext.text} id='text' className='maintextinput'/></label>
        <button onClick={newtext.undo} disabled={newtext.disabelundo} >Undo</button>
        <button onClick={newtext.redo} disabled={newtext.disableredobutton}> Redo </button>
      </div>
      <button type='button' onClick={handleSubmit} className='submitbutton'>Save <FaArrowRight />
</button>

      <div className='fontsizeselect'>
        <label htmlFor='fontsize'>Font Size :         <select

value={newtext.newfont}
label="fontsize"
onChange={(e) => newtext.handlefontchange(e)}>

  {fontsizes.map((number) => (
    <option key={number} value={number} >{number}</option>
    ))}
 
</select>
</label>
       

        <label htmlFor='color'>Color :  <input type='color' onChange={(e) => newtext.colorhandlechange(e)} value={newtext.colorcode} /></label>
       
      </div>
      <div className='checkboxes'>
        <label>
          Bold :
          <Checkbox {...label} checked={newtext.boldchecked.boolean} onChange={newtext.boldhandlechange}/>
        </label>
        <label>
          Italic :
          <Checkbox {...label}  checked={newtext.italicchecked.boolean} onChange={newtext.italichandlechange} />
        </label>
        <label>
          Underline :
          <Checkbox {...label} checked={newtext.underlinechecked.boolean} onChange={newtext.underlinehandlechange}/>

        </label>
      </div>
      </div>
      <div className='buttonoptions'>
      <label htmlFor='color'>Background Color :
         <input type='color' onChange={(e) => newtext.bckgcolorchange(e)} value={newtext.bckgcolor} />
         </label>
    
      </div>
      <div className='border'>
<label>Remove Border<Checkbox {...label} checked={newtext.borderdisplayed} onChange={newtext.borderdisplaychange}/></label>
<label style={{ textDecoration : newtext.borderdisplayed ? 'line-through' : 'none' ,color : newtext.borderdisplayed ? 'gray' : ''}}>Color :
  <input  disabled={newtext.borderdisplayed} type='color' onChange={(e) => newtext.bordercolorchange(e)} value={newtext.initialbordercolor} /></label>
<label style={{ textDecoration : newtext.borderdisplayed ? 'line-through' : 'none' ,color : newtext.borderdisplayed ? 'gray' : ''}}>Size : 
  <select disabled={newtext.borderdisplayed} onChange={(e)=>newtext.bordersizechange(e)} >
  <option value={"1px"}>Thin</option>
  <option value={"2px"}>medium</option>
  <option value={"3px"}>thick</option>
  </select></label>
</div>
<div>

</div>
<button className='deletebutton'>Delete Component</button>
      </div>

      :

      <div className='fakecontent'>
      <label htmlFor='text' style={{ marginBottom: "15px" }}>
        "{newtext.text}" {datatype}
      </label>
      <div className='container'>
      <div className='inputnbutton'>
      <label htmlFor='text'> Text
      <input onChange={(e) => newtext.handlechange(e)}  placeholder={newtext.text} id='text' className='maintextinput'/></label>
        <button onClick={newtext.undo} disabled={newtext.disabelundo} >Undo</button>
        <button onClick={newtext.redo} disabled={newtext.disableredobutton}> Redo </button>
      </div>
      <button type='button' onClick={handleSubmit} className='submitbutton'>Save <FaArrowRight />
</button>

      <div className='fontsizeselect'>
        <label htmlFor='fontsize'>Font Size :         <select

value={newtext.fontsize}
label="fontsize"
onChange={(e) => newtext.handlefontchange(e)}>
  {fontsizes.map((number) => (
    <option key={number} value={number}>{number}</option>
    ))}
</select>
</label>
       

        <label htmlFor='color'>Color :  <input type='color' onChange={(e) => newtext.colorhandlechange(e)} value={newtext.colorcode} /></label>
       
      </div>
      <div className='checkboxes'>
        <label>
          Bold :
          <Checkbox {...label}  checked={newtext.boldchecked.boolean} onChange={newtext.boldhandlechange}/>
        </label>
        <label>
          Italic :
          <Checkbox {...label}  checked={newtext.italicchecked.boolean} onChange={newtext.italichandlechange} />
        </label>
        <label>
          Underline :
          <Checkbox {...label}  checked={newtext.underlinechecked.boolean} onChange={newtext.underlinehandlechange}/>

        </label>
      </div>
      </div>
<div>

</div>
<button className='deletebutton'>Delete Component</button>
      </div>


}

</FormControl>
    


  );
}
