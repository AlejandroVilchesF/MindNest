function NoteItem({ note }) {
  if (!note.parent_note) {
    return <h1 className="font-bold text-lg mb-2" key={note.id}>{note.note_title}</h1>;
  }
  return <p className="bg-white hover:bg-gray-100 rounded-md p-2 mb-2 shadow-sm text-sm text-gray-700 cursor-pointer" key={note.id}>{note.note_title}</p>;
}
export default NoteItem;