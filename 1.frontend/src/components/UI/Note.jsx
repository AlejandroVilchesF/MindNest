import NoteItem from "./NoteItem";
import Modal from "./Modal";
import ContentModal from "./ContentModal";
import { useState } from "react";
import Button from "@/components/UI/Button";

function Note({
  notes,
  onToggleNoteCompleted,
  onDescriptionChange,
  onAddTask,
}) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    onAddTask(notes[0].note_id, newTitle);
    setNewTitle("");
    setIsAdding(false);
  };

  const handleCancel = () => {
    setNewTitle("");
    setIsAdding(false);
  };

  return (
    <>
      <div className="bg-white w-60 h-fit rounded-lg py-3 px-4 shadow-sm">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onClick={setSelectedNote} />
        ))}
        {/* Add new task */}
        {isAdding ? (
          <div className="bg-white w-full h-fit rounded-lg py-3 px-4 text-sm shadow-sm">
            <input
              type="text"
              autoFocus
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="Task title..."
            />
            <div className="mt-2 w-50 flex justify-between">
              <Button text="Save" extraClasses="mr-2" onClick={handleSave} />
              <Button
                text="Cancel"
                color="transparent"
                onClick={handleCancel}
              />
            </div>
          </div>
        ) : (
          <div
            className="bg-white hover:bg-gray-100 rounded-md p-2 text-sm text-gray-700 cursor-pointer font-bold"
            onClick={() => setIsAdding(true)}
          >
            + Add a new task
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedNote} onClose={() => setSelectedNote(null)}>
        <ContentModal
          content={selectedNote}
          onClose={() => setSelectedNote(null)}
          onToggleNoteCompleted={onToggleNoteCompleted}
          onDescriptionChange={onDescriptionChange}
        />
      </Modal>
    </>
  );
}
export default Note;
