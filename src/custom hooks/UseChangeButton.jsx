import React , { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa'

const UseChangeButton = (textt,setvisible,icon) =>{

// reutrn outline style
// change react icons


// submit only for changing the text of the component ,,,,,,, other features are changing immediately     -important


const test = "this is the test text"
    const [text,    settext ] = useState(textt)
    const [newtext,setnewtext] = useState("")
    const [prevtext,setprevtext] = useState([textt])
    const [itemid,setitemid] = useState(0)
    const [disableredobutton,setdisableredobutton] = useState(true)
    const [disabelundo,setdisabelundo] = useState(true)
    const [newarray,setnewarray] = useState([])
    const [fontsize,setfontsize] = useState(16)
    const [newfont,setnewfont] = useState(fontsize)
    const [colorcode,setcolorcode] = useState("#000000")
    const [Color,setColor] = useState(colorcode)
    const [boldchecked,setboldchecked] = useState({boolean:false,css:"bold"})
    const [italicchecked,setitalicchecked] = useState({boolean:false,css:"italic"})
    const [underlinechecked,setunderlinechecked] = useState({boolean:false,css:"underline"})
    const [textstyle,settextstyle] = useState({bold:false,italic:false,underline:false})
    const [bckgcolor,setbckgcolor] = useState("#ffffff")
    const [backgroundcolor,setbackgroundcolor] = useState(bckgcolor)
    const [initialbordercolor,setinitialbordercolor] = useState("black")
    const [bordercolor,setbordercolor] = useState(initialbordercolor)
    const [initialbordersize,setinitialbordersize] = useState("1px")
    const [bordersize,setbordersize] = useState(initialbordersize)
    const [initialborder,setinitialborder] = useState(`${bordersize} solid ${bordercolor}`)
    const [border,setborder] = useState(initialborder)
    const [borderdisplayed,setborderdisplayed] = useState(true)



    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }

    const handlefontchange = (e) => {
         e.preventDefault()
        setnewfont(e.target.value)
    }
    const colorhandlechange = (e) =>{
         e.preventDefault();
         setcolorcode(e.target.value)
    }
    const borderdisplaychange = (e) =>{
        setborderdisplayed(e.target.checked)
    }
    
    const bckgcolorchange = (e) =>{
        setbckgcolor(e.target.value)
    }
    
    const bordercolorchange = (e) => {
        setinitialbordercolor(e.target.value)
    }
    
    const bordersizechange = (e) => {
            e.preventDefault();
    setinitialbordersize(e.target.value)
    }
    
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
    
useEffect(()=>{

    if(borderdisplayed === true){
        setborder("none")
    }

setnewarray([...prevtext])
settext(prevtext[itemid])
setdisableredobutton(itemid < prevtext.length-1)
setdisableredobutton(itemid == prevtext.length-1)
setdisabelundo(itemid > 0)
setdisabelundo(itemid == 0)

 },[prevtext,itemid,text,colorcode,boldchecked,textstyle,italicchecked])


useEffect(()=>{
    if(!borderdisplayed){
        setborder(bordersize + ' solid ' + bordercolor)
    }

    else if(borderdisplayed){
        setborder('none')
    }
},[initialbordercolor,bordercolor,bordersize,initialbordersize,border,borderdisplayed])

    const handlesubmit = (e) => {
        
  
        setbordercolor(initialbordercolor)
        setbordersize(initialbordersize)

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
        setbackgroundcolor(bckgcolor)
  
    }


const undo =(e)=>{
    e.preventDefault();
    if (itemid > 0){
        const lessid = itemid - 1
        setitemid(lessid)
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
        undo,
        redo,
        disableredobutton,
        disabelundo,
        fontsize,
        handlefontchange,
        icon,
        Color,
        colorhandlechange,
        colorcode,
        boldhandlechange,
        italichandlechange,
        textstyle,
        underlinehandlechange,
        boldchecked,
        italicchecked,
        underlinechecked,
        newfont,
        test,
        bckgcolor,
        backgroundcolor,
        borderdisplaychange,
        border,
        initialbordercolor,
        bckgcolorchange,
        borderdisplayed,
        bordersizechange,
        bordercolorchange
      };
}
export default UseChangeButton;