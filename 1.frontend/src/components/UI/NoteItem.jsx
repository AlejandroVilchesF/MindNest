function NoteItem({ note }) {
  if (!note.parent_note) {
    return <h1 className="font-bold" key={note.id}>{note.note_title}</h1>;
  }
  return <p key={note.id}>{note.note_title}</p>;
}
export default NoteItem;