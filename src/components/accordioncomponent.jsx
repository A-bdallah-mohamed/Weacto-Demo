import React, { useState } from 'react'
import './accordion.css';
import { useScrollTrigger } from '@mui/material';
import userEvent from '@testing-library/user-event';
export default function Accordioncomponent({maintext,subtext}) {

    const [isopen,setisopen] = useState(false)
    const clickhandle = () => {
setisopen(prev => !prev)
    }
  return (
    <div className='accordioncontainer'>
        <div className='accordion' >

            <div className='maintext'  onClick={clickhandle}>
                <p>{maintext}</p>{isopen ? <p>-</p> : <p>+</p>}
                </div>
                {isopen && 
<div className='subtext'>
    <p>{subtext}</p>
</div>}
            </div>

            </div>
  )
}
