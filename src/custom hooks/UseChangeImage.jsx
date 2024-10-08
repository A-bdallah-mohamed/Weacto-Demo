import React , {useEffect , useState} from "react";
import Form from "../components/Form";


const UseChangeImage = (link,setvisible) =>{
    const [imageline,setimagelink] = useState(link)

    const [newimg,setnewimg] = useState(null)

    const handleimagechange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setnewimg(reader.result); 
          };
          reader.readAsDataURL(file);
        }
    }
    const handlesubmitimage = (e) => {
        setimagelink(newimg)
        setvisible(false)
        setnewimg(null); 
    }
    return{
        imageline,
        handleimagechange,
        newimg,
        handlesubmitimage
    }
}

export default UseChangeImage;