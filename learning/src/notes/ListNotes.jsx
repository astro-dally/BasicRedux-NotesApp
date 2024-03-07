export default function ListNotes({notes=[]}){
    return(
        <div>
            <h3>Check out your notes here!!</h3>
            {notes.map((note)=>(
                
                <div>
                    Note:{note}
                </div>
            ))}
        </div>
    );
}
