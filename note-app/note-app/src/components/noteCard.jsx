function NoteCard({ note, editNote, deleteNote }) {

    return (
        <div className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <small>{note.time}</small>

            <div>
                <button onClick={() => editNote(note)}>
                    Edit
                </button>

                <button onClick={() => deleteNote(note.id)}>
                    Delete
                </button>
            </div>

        </div>
    );
}

export default NoteCard;