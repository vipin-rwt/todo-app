import Addnote from "./Addnote";
import "./First.css";
import {nanoid} from "nanoid";
import Firstapp from "./Firstapp";
export default function Notes({notes,handletonote,handelete}){

   
    return(

         <div className="list">
           {notes.map((note)=>

            <Firstapp id={note.id}  text={note.text} handelete={handelete}/>
   

   )}
              
              <Addnote  handletonote={handletonote}/>
                
                
          </div>           

    );

}