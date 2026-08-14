function NoteForm({
    title,
    content,
    setTitle,
    setContent,
    handleSubmit,
    editId
}) {

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write your note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button type="submit">
                {editId !== null ? "Update Note" : "Add Note"}
            </button>

        </form>
    );
}

export default NoteForm;