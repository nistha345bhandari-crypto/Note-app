function NoteList({ notes, editNote, deleteNote }) {

    if (notes.length === 0) {
        return (
            <p className="no-notes">
                No notes found...
            </p>
        );
    }

    return (
        <div className="notes-container">

            {notes.map((note) => (
                
                <details
                    className="note-card"
                    key={note.id}
                >

                    <summary>
                        <h2>{note.title}</h2>
                    </summary>

                    <p>{note.content}</p>

                    <small>{note.time}</small>

                    <div className="note-buttons">

                        <button
                            onClick={() => editNote(note)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteNote(note.id)}
                        >
                            Delete
                        </button>

                    </div>

                </details>

            ))}

        </div>
    );
}

export default NoteList;