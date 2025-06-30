import NoteItem from "./NoteItem";

function Note({notes}) {
  return (
    <div className="bg-white w-40 h-fit text-center">
      {notes.map(note => <NoteItem key={note.id} note={note} />)}
      <div>+</div>
    </div>
  );
}
export default Note;
