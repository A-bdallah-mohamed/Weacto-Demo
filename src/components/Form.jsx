import React, { useEffect, useRef, useState } from 'react';
import './forms.css';
import { FaArrowRight } from "react-icons/fa";
import useMeasure from 'react-use-measure';
import UseIntersection from '../custom hooks/UseIntersection';

export default function Form({
  newtext, position, formvisible, setformvisible, datatype, editable, setselectedItemId
}) {
  const fontsizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  const handleSubmit = (e) => {
    e.preventDefault();
    newtext.handlesubmit();
  };
  const [form,isformshown] = UseIntersection()


  // fix design error in input from left 
  return (
    <>
   
       <form className={`formtext ${isformshown && 'formshown'}`} style={{ left: position.x, top: position.y, position: 'absolute'}} ref={form}>
      <div onClick={() => setformvisible(false)} className='closelogo'>X</div>
      
      { datatype === "button" ? <div className='fakecontent'>
      <label htmlFor='text' style={{ marginBottom: "15px" }}>
        "{newtext.text}" {datatype}
      </label>
      <div className='container'>
      <div className='inputnbutton'>
        <input onChange={(e) => newtext.handlechange(e)}  placeholder={newtext.text} id='text' />
        <button onClick={newtext.undo} disabled={newtext.disabelundo} >Undo</button>
        <button onClick={newtext.redo} disabled={newtext.disableredobutton}> Redo </button>
      </div>
      <div className='fontsizeselect'>
        <label htmlFor='fontsize'>Font Size : </label>
        <select onChange={(e) => newtext.handlefontchange(e)} id='fontsize' value={newtext.newfont}>
          {fontsizes.map((number) => (
            <option key={number} value={number}>{number}</option>
            ))}
        </select>
        <label htmlFor='color'>Color : </label>
        <input type='color' onChange={(e) => newtext.colorhandlechange(e)} value={newtext.colorcode} />
      </div>
      <div className='checkboxes'>
        <label>
          Bold
          <input type='checkbox' checked={newtext.textstyle.bold} onChange={newtext.boldhandlechange}/>
        </label>
        <label>
          Italic
          <input type='checkbox' checked={newtext.textstyle.italic} onChange={newtext.italichandlechange} />
        </label>
        <label>
          Underline
          <input type='checkbox' checked={newtext.textstyle.underline} onChange={newtext.underlinehandlechange}/>
        </label>
      </div>
      </div>
      <div className='buttonoptions'>
      <label htmlFor='color'>Background Color : <input type='color' onChange={(e) => newtext.colorhandlechange(e)} value={newtext.colorcode} /></label>
      <label htmlFor='color'>Spacing :   
        <select value={newtext.newfont}>
          <option value="large">Large</option>
        </select>
      </label>
      </div>
<div>

</div>
      </div>

      :<div className='fakecontent'>
      <label htmlFor='text' style={{ marginBottom: "15px" }}>
        "{newtext.text}" {datatype}
      </label>
      <div className='container'>
      <div className='inputnbutton'>
        <input onChange={(e) => newtext.handlechange(e)}  placeholder={newtext.text} id='text' />
        <button onClick={newtext.undo} disabled={newtext.disabelundo} >Undo</button>
        <button onClick={newtext.redo} disabled={newtext.disableredobutton}> Redo </button>
      </div>
      <div className='fontsizeselect'>
        <label htmlFor='fontsize'>Font Size : </label>
        <select onChange={(e) => newtext.handlefontchange(e)} id='fontsize' value={newtext.newfont}>
          {fontsizes.map((number) => (
            <option key={number} value={number}>{number}</option>
            ))}
        </select>
        <label htmlFor='color'>Color : </label>
        <input type='color' onChange={(e) => newtext.colorhandlechange(e)} value={newtext.colorcode} />
      </div>
      <div className='checkboxes'>
        <label>
          Bold
          <input type='checkbox' checked={newtext.textstyle.bold} onChange={newtext.boldhandlechange}/>
        </label>
        <label>
          Italic
          <input type='checkbox' checked={newtext.textstyle.italic} onChange={newtext.italichandlechange} />
        </label>
        <label>
          Underline
          <input type='checkbox' checked={newtext.textstyle.underline} onChange={newtext.underlinehandlechange}/>
        </label>
      </div>
      </div>
<div>

</div>
      </div>


}
<button type='button' onClick={handleSubmit} className='submitbutton'>Save <FaArrowRight />
</button>
    </form> 
    

    </>
  );
}
