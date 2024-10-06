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
    




    const [newarray,setnewarray] = useState([])
    const handlechange = (e)  => {
        setnewtext(e.target.value)
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
     },[prevtext,itemid,text])
    


    const [fontsize,setfontsize] = useState(16)
    const handlefontchange = (e) => {
        e.preventDefault()
        setfontsize(e.target.value)
   }

    const [Color,setColor] = useState("#000000")

    const colorhandlechange = (e) =>{
        e.preventDefault();
        setColor(e.target.value)
   }



    const [boldchecked,setboldchecked] = useState({boolean:false,css:"bold"})
    const [italicchecked,setitalicchecked] = useState({boolean:false,css:"italic"})
    const [underlinechecked,setunderlinechecked] = useState({boolean:false,css:"underline"})

    const boldhandlechange = (e) => {
        setboldchecked(prevState => ({
            ...prevState,  
            boolean: e.target.checked     
          }));
    }
    
    const italichandlechange = (e) => {
        setitalicchecked(prevState => ({
            ...prevState,  
            boolean: e.target.checked     
          }));
    }
    
    const underlinehandlechange = (e) => {
        setunderlinechecked(prevState => ({
            ...prevState,  
            boolean: e.target.checked     
          }));
    }
    
    
    const [backgroundcolor,setbackgroundcolor] = useState("#ffffff")

    const bckgcolorchange = (e) =>{
        setbackgroundcolor(e.target.value)
    }
    
    const [bordercolor,setbordercolor] = useState("#000000")

    const bordercolorchange = (e) => {
        setbordercolor(e.target.value)
    }
    
    const [bordersize,setbordersize] = useState("1px")

    const bordersizechange = (e) => {
        e.preventDefault();
        setbordersize(e.target.value)
}

const [borderdisplayed,setborderdisplayed] = useState(true)
    const [border,setborder] = useState(`${bordersize} solid ${bordercolor}`)
    useEffect(()=>{
        if(!borderdisplayed){
            setborder(bordersize + ' solid ' + bordercolor)
        }
    
        else if(borderdisplayed){
            setborder('none')
        }
    },[borderdisplayed,bordersize,bordercolor])
    

    const borderdisplaychange = (e) =>{
        setborderdisplayed(e.target.checked)
    }
    







const handlesubmit = (e) => {
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
        boldhandlechange,
        italichandlechange,
        underlinehandlechange,
        boldchecked,
        italicchecked,
        underlinechecked,
        test,
        backgroundcolor,
        borderdisplaychange,
        border,
        bckgcolorchange,
        borderdisplayed,
        bordersizechange,
        bordercolorchange
      };
}
export default UseChangeButton;