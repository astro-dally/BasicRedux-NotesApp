import { useState } from "react";
import AddNotes from "./AddNotes";
import ListNotes from "./ListNotes";

export default function NotesComponent({}){
    const[notes,setNotes] = useState([]);
    function HandleAddNotes(note){
        console.log("hello from notes component", notes);
        setNotes([...notes, note]);
    }
    return(
        <div>
            <h1>My Notes App</h1>
            <AddNotes handleAddNote={HandleAddNotes} />
            <ListNotes notes ={notes}/>
        </div>
    );
}

// function NotesComponent({}) {
//     return <div>Notes</div>;
//   }
  
//   export default NotesComponent;
