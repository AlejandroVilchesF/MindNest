import NoteItem from "./NoteItem";

function Note({notes}) {
  return (
    <div className="bg-white w-60 h-fit rounded-lg py-3 px-4 shadow-sm">
      {notes.map(note => <NoteItem key={note.id} note={note} />)}
      <div className="bg-white hover:bg-gray-100 rounded-md p-2 text-sm text-gray-700 cursor-pointer">+ Add a new task</div>
    </div>
  );
}
export default Note;
