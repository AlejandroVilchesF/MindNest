function NoteItem({ note, onClick }) {

  if (!note.parent_note) {
    return <h1 className="font-bold text-lg mb-2" key={note.id}>{note.note_title}</h1>;
  }
  
  const completionBgClass = note.completed ? "bg-green-100 hover:bg-green-50": "bg-white hover:bg-gray-100"

  return <p className={`${completionBgClass} rounded-md p-2 mb-2 shadow-sm text-sm text-gray-700 cursor-pointer`} key={note.id} onClick={() => onClick(note)}>{note.note_title}</p>;
}

export default NoteItem;