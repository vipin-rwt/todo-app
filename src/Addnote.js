import React from "react";
import { useState } from "react";
export default function Addnote({handletonote}){

    const [newnote, setNewnotes] = useState('');

    const handleclick=(e)=>
    {
    setNewnotes(e.target.value);
    }

    const handledata = ()=>{

        if(newnote.trim().length>0){
        handletonote(newnote);
        setNewnotes('');
        }
 }
    
    return(
             
    <div className="container">

    <div className="textarea">
        
        <textarea 
        name="text1" 
        cols="30" 
        rows="10"  
        placeholder="Enter your New note...." 
        onChange={handleclick}
        value={newnote}>

        </textarea>

    </div>
    <div className="bottom">
        <button className="done" onClick={handledata}>Done</button>
        <button className="reset">Reset</button>
    </div>
    </div>




    );


}