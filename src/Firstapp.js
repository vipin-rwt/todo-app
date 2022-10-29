import React from "react";
import "./First.css";
export default function Firstapp({id,text,handelete}){





 return(

    <div className="container">

    <div className="textarea">
        
        <textarea name="text1" id="" cols="30" rows="10" resize="none" placeholder="Enter your text here....">{text}</textarea>

    </div>
    <div className="bottom">
        <button className="done">Done</button>
        <button className="delete" onClick={()=>handelete(id)} >Delete</button>
    </div>
    </div>

 );

}