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
import { MdCloudUpload } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";






// Add dragin feature             -important !!


export default function Form({
  newtext, position,setposition,formvisible, setformvisible, datatype, editable, setselectedItemId
}) {
const [areyousure, areyousureshown] = UseIntersection(false)

  const fontsizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  const handleSubmit = (e) => {
    e.preventDefault();
    newtext.handlesubmit();
  };

 const [form,isformshown] = UseIntersection(true)

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [dragging , setdragging] = useState(false)

const [dragOffset,setdragOffset] = useState({x:0,y:0})

const handleonmousedown = (e) => {
  const offsetX = e.nativeEvent.offsetX;
  const offsetY = e.nativeEvent.offsetY;
  console.log(position)
    setdragOffset({
    x:offsetX,
    y:offsetY
  })
}
  const  mousedownhandle = (e) => {
    const Ycordinates = e.clientY + window.scrollY 
    const Xcordinates = (e.clientX + window.scrollX ) -  dragOffset.x
    setposition({x:Xcordinates , y : Ycordinates})


setdragging(true)
  } 

  const  mousemovehandle = (e) => {
    const Ycordinates = e.clientY + window.scrollY 
    setdragging(true)
    const Xcordinates = (e.clientX + window.scrollX ) -  dragOffset.x
    setposition({x:Xcordinates , y : Ycordinates})

  } 
  
  const  mouseuphandle = (e) => {
    const Ycordinates = e.clientY + window.scrollY 
    const Xcordinates = (e.clientX + window.scrollX ) -  dragOffset.x
    setposition({x:Xcordinates , y : Ycordinates})

    setdragging(false)

  }
  
  const [deletescreen,setdeletescreen] = useState(false)
const areyousureon = () => {
  setdeletescreen(true)
  document.body.style.overflow = 'hidden';
  console.log("on")
}
const cancel = () => {
  setdeletescreen(false)
  document.body.style.overflow = 'auto';
  console.log("off")
}
const yesdelete = () => {
  setdeletescreen(false)
  document.body.style.overflow = 'auto';
  console.log("off")
}
  return (
<>
  <div className={`${deletescreen ? 'bigscreen' : 'bigscreenunvisible'}`} ref={areyousure}>
    <div className={` ${areyousureshown ? 'testt' : 'testtnotshown'} `} >
      <div className='testcontainer'>
    <MdAutoDelete style={{ fontSize: '40px' ,color:'red'}} />

      <h6>deleting "{newtext.text}" {datatype} </h6>
      <p>Are you sure you want to delete "{newtext.text}" {datatype} ?<br />Once deleted it cannot be recovered </p>
      <div className='buttonsdiv'>
        <button onClick={()=>cancel()}>CANCEL</button>
        <button onClick={()=>yesdelete()}>YES! DELETE</button>
      </div>
    </div>
    </div>
  </div>
   <FormControl ref={form} className={`formtext ${isformshown && 'formshown'}`} style={{ left: position.x, top: position.y, position: 'absolute'}}>
   
      <div onClick={() => setformvisible(false)} className='closelogo'>X</div>
      <div>
        

      </div>
      <div className='dragabble' draggable={true} onMouseDown={(e)=>handleonmousedown(e)} onDragCapture={(e)=>mousedownhandle(e)} onDrag={(e)=>mousemovehandle(e)} onDragEnd={(e)=>mouseuphandle(e)}/>

      { datatype === "button" && <div className='fakecontent'>
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
         <input type='color' onChange={(e) => newtext.bckgcolorchange(e)} value={newtext.backgroundcolor} />
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
<button className='deletebutton' onClick={()=>areyousureon()}>Delete Component</button>
      </div>
}
{ datatype === "text" &&

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
<button className='deletebutton' onClick={()=>areyousureon()}>Delete Component</button>
      </div>


}

{ datatype === "image" &&

<div className='fakecontent'>
<label htmlFor='text' style={{ marginBottom: "15px" }}>
  <div className='imageinlabel' style={{backgroundImage:`url(${newtext.imageline})`,backgroundSize:'cover'}}/> {datatype}
</label>
<div className='uploadcontainer'  onClick={() => document.getElementById('imageInput').click()}>
<input type="file" accept="image/*" style={{ display: 'none' }} id="imageInput" onChange={newtext.handleimagechange}/>
<MdCloudUpload  className='uploadtext' />
</div>
{newtext.newimg ? <div className='imageuploadedcontainere'><div className='imageuploaded'><div style={{backgroundImage:`url(${newtext.newimg})`}} className='imagein'/><h5>Completed</h5></div>
<IoMdCloudDone className='doneicon' />
</div> : <p onClick={() => document.getElementById('imageInput').click()}>Upload image</p>}

<br />
<button className='submitbutton' onClick={newtext.handlesubmitimage}>Submit</button>

</div>



}
</FormControl>
    

</>
  );
}
