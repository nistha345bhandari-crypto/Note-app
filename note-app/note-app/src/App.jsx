import { useEffect, useState } from "react";
import "./app.css";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {

        const savedNotes =
            JSON.parse(localStorage.getItem("notes")) || [];

        setNotes(savedNotes);
        setIsLoaded(true);
    }, []);
    useEffect(() => {
      if(!isLoaded){
        return;
      }

        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );

    }, [notes,isLoaded]);

  
    function handleSubmit(e) {

        e.preventDefault();

        if (title.trim() === "" || content.trim() === "") {
            alert("Please enter title and content");
            return;
        }

        if (editId !== null) {

            setNotes(
                notes.map((note) =>
                    note.id === editId
                        ? {
                            ...note,
                            title: title,
                            content: content,
                            time: new Date().toLocaleString()
                        }
                        : note
                )
            );

            setEditId(null);

        } else {

            const newNote = {
                id: Date.now(),
                title: title,
                content: content,
                time: new Date().toLocaleString()
            };

            setNotes([...notes, newNote]);
        }

        setTitle("");
        setContent("");
    }


    function deleteNote(id) {

        setNotes(
            notes.filter((note) => note.id !== id)
        );

    }

    // Edit note
    function editNote(note) {

        setTitle(note.title);
        setContent(note.content);
        setEditId(note.id);

    }


    const filteredNotes = notes.filter((note) =>
        note.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        note.content
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="app">

            <h1>📝 My Notes</h1>

            <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <NoteForm
                title={title}
                content={content}
                setTitle={setTitle}
                setContent={setContent}
                handleSubmit={handleSubmit}
                editId={editId}
            />

            <NoteList
                notes={filteredNotes}
                editNote={editNote}
                deleteNote={deleteNote}
            />

        </div>
    );
}

export default App;