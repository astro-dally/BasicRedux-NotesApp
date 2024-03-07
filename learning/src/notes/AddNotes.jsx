import { useState } from "react";

export default function AddNotes({handleAddNote=()=>{}}){
    const [note, setNote] = useState("");

    function HandleAddNoteTextareChange(e){
        console.log("e.target.value",e.target.value);
        e.preventDefault();
        setNote(e.target.value);
    }
    const HandleAddNoteChildFunctionInButton = ()=>{
        console.log("note from handle", note);
        handleAddNote(note);
        setNote("");
    };



    return(
        <div>
            <textarea placeholder="Type your notes here" value={note} onChange={(e)=>{HandleAddNoteTextareChange(e)}}/>
            <button onClick={HandleAddNoteChildFunctionInButton}>Add Note</button>
        </div>
    );
}
//component
// function Hello(){

// }
