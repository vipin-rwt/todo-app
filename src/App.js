import React, { useState } from "react";
import {nanoid} from "nanoid";
import './App.css';
import Notes from './Notes';

function App() {

  const [notes,setNotes] = useState([{
    id:nanoid(),
    text:"loverr"
  }

]
);

const handletonote=(text)=>{
  const newnote={
    id:nanoid(),
    text:text
  }


  const newNotes=[...notes,newnote];
  setNotes(newNotes);
}

 const handelete=(id)=>{
  const newnNotes= notes.filter((note)=> note.id !== id);
  setNotes(newnNotes);
}

 return(
<>

<Notes notes={notes} handletonote={handletonote} handelete={handelete} />

</>

  );
}

export default App;
