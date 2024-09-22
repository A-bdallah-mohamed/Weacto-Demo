import React , { useEffect, useState } from "react";
import Form from "../components/Form";
import * as FaIcons from 'react-icons/fa'
const UseChangetext = (textt,setvisible,icon) =>{

// reutrn outline style
// change text style (bordered, underlined, italic)
// change react icons

    const [text,    settext ] = useState(textt)
    const [newtext,setnewtext] = useState("")
    const [prevtext,setprevtext] = useState([textt])
    const [itemid,setitemid] = useState(0)
    const [disableredobutton,setdisableredobutton] = useState(true)
    const[disabelundo,setdisabelundo] = useState(true)
    const [newarray,setnewarray] = useState([])
    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }
    const [fontsize,setfontsize] = useState(16)
    const [newfont,setnewfont] = useState(fontsize)
    const handlefontchange = (e) => {
         e.preventDefault()
        setnewfont(e.target.value)
    }
const style = {
    fontSize: fontsize
}
const [colorcode,setcolorcode] = useState("#000000")
const [Color,setColor] = useState(colorcode)
const colorhandlechange = (e) =>{
    e.preventDefault();
    setcolorcode(e.target.value)
}
const [boldchecked,setboldchecked] = useState({boolean:false,css:"bold"})
const [italicchecked,setitalicchecked] = useState({boolean:false,css:"italic"})
const [underlinechecked,setunderlinechecked] = useState({boolean:false,css:"underline"})
const [textstyle,settextstyle] = useState({bold:false,italic:false,underline:false})
useEffect(()=>{
setnewarray([...prevtext])
settext(prevtext[itemid])
    setdisableredobutton(itemid < prevtext.length-1)
    setdisableredobutton(itemid == prevtext.length-1)
    setdisabelundo(itemid > 0)
    setdisabelundo(itemid == 0)
},[prevtext,itemid,text,colorcode,boldchecked,textstyle,italicchecked])



const boldhandlechange = (e) => {
    settextstyle(prevState => ({
        ...prevState,  
        bold: e.target.checked     
      }));
}
const italichandlechange = (e) => {
    settextstyle(prevState => ({
        ...prevState,  
        italic: e.target.checked     
      }));
}
const underlinehandlechange = (e) => {
    settextstyle(prevState => ({
        ...prevState,  
        underline: e.target.checked     
      }));
}

    const handlesubmit = (e) => {

        setboldchecked(prevState => ({
            ...prevState,  
            boolean: textstyle.bold    
          }));
          setitalicchecked(prevState => ({
            ...prevState,  
            boolean: textstyle.italic    
          }));
          setunderlinechecked(prevState => ({
            ...prevState,  
            boolean: textstyle.underline    
          }));
if(!newtext == ""){
    const newid = itemid + 1
    const length = prevtext.length
    const diff = length - newid
    const neww = newarray
    neww.splice(newid , diff , newtext)
    
    
            setnewarray(neww)
            setitemid(itemid+1)
            setprevtext(newarray);
}
setColor(colorcode)
        setvisible(false)
        setfontsize(newfont)
    }


const undo =(e)=>{
    e.preventDefault();
    if (itemid > 0){
        const lessid = itemid - 1
        setitemid(lessid)
    }
else{
console.log("cant undo")
}
    setvisible(false)
}

const redo = (e) => {
    e.preventDefault();
    if(itemid < prevtext.length-1){
        setitemid(itemid+1)
    }
    setvisible(false)
}


    return { 
        text, 
        newtext, 
        handlechange, 
        handlesubmit, 
        setnewtext,
        prevtext,
        undo, redo ,disableredobutton ,disabelundo,style ,fontsize,handlefontchange,icon,Color,colorhandlechange,colorcode,
        boldhandlechange,
italichandlechange,textstyle,
underlinehandlechange,boldchecked,italicchecked,underlinechecked,newfont
      };
}
export default UseChangetext;