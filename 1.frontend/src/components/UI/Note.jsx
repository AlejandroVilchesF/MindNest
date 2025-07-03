import NoteItem from "./NoteItem";
import Modal from './Modal';
import { useState } from 'react';

function Note({notes}) {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <>
      <div className="bg-white w-60 h-fit rounded-lg py-3 px-4 shadow-sm">
        {notes.map(note => <NoteItem key={note.id} note={note} onClick={setSelectedNote} />)}
        <div className="bg-white hover:bg-gray-100 rounded-md p-2 text-sm text-gray-700 cursor-pointer">+ Add a new task</div>
      </div>
      
      <Modal isOpen={!!selectedNote} onClose={() => setSelectedNote(null)}>
        <h2 className="text-xl font-semibold mb-2">{selectedNote?.note_title}</h2>
        <p>{selectedNote?.note_content}</p>
      </Modal>
    </>
  );
}
export default Note;
