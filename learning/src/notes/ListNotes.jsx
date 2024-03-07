export default function ListNotes({notes=[]}){
    console.log("notes", notes);
    return(
        <div>
            <h3>Check out your notes here!!</h3>
            {notes.map((note, index)=>(
                
                <div key={index}>
                    Note:{note}
                </div>
            ))}
        </div>
    );
}
