import React, {useEffect}from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import { Switch , Link} from 'react-router-dom';
import Website1 from './website1';
import { FaBackward } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { EditbleStateContext } from '../../GlobalStates.jsx/EditbleState'
import './website1.css';
export default function Website1routes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {editable,seteditable} = useContext(EditbleStateContext)
  const vieworedit = () => {
    if(editable){
      return(
        <div>Edit mode</div>
      );
    }
  
    else {
      return(
        <div>View mode</div>
      );
    }


  }
  return (
    <div className='containerofcontainer'>
    
 <div className='goback'>
 <div className='iconntext'>
   <Link to='/' className='backicon' onClick={() => seteditable(false)}>
 <FaBackward className='backicon2'/> <p> Back to Main page </p>
 </Link>
{vieworedit()}
 </div>
</div>
   <Routes>
        <Route path='/' element={<Website1 editable={editable} seteditable={seteditable} />} />
        <Route path='/Edit' element={<Website1 editable={editable} seteditable={seteditable} />} />
    </Routes>
    </div>
  )
}
