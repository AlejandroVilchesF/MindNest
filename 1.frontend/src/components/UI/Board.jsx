import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Note from "@/components/UI/Note";
import { useState } from "react";
import Button from "@/components/UI/Button"; // Asegúrate de importar tu componente Button

function Board({ board, onToggleNoteCompleted, onDescriptionChange, onAddNote, onAddTask, onDeleteNote }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const groupNotes = (notes) => {
    const grouped = {};
    notes.forEach((note) => {
      if (!note.parent_note) {
        grouped[note.note_id] = [];
        grouped[note.note_id].push(note);
      } else {
        grouped[note.parent_note].push(note);
      }
    });
    return Object.entries(grouped).map(([parentId, notesArray]) => ({
      parentId,
      notes: notesArray,
    }));
  };

  const handleAdd = () => {
    if (newTitle.trim() !== "") {
      onAddNote(board.board_id, newTitle.trim());
    }
    setNewTitle("");
    setIsAdding(false);
  };

  const handleCancel = () => {
    setNewTitle("");
    setIsAdding(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Subheader */}
      <div className="w-full h-14 px-6 bg-black/30 text-white flex items-center justify-between shadow-sm border-b border-white/10">
        <div className="font-bold">{board.board_name}</div>
        <div className="flex items-center space-x-3 text-sm text-white/80">
          <div className="text-right">
            <div className="font-medium">{board.created_by.user_name}</div>
            <div>{formatDate(board.created)}</div>
          </div>
          <button
            aria-label="Board options"
            className="p-2 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <EllipsisVerticalIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Notes content */}
      <main className="flex-1 p-4 flex space-x-4">
        {groupNotes(board.notes).map((group) => (
          <Note
            key={group.parentId}
            notes={group.notes}
            onToggleNoteCompleted={onToggleNoteCompleted}
            onDescriptionChange={onDescriptionChange}
            onAddTask={onAddTask}
            onDeleteNote={onDeleteNote}
          />
        ))}

        {/* Add new note */}
        {isAdding ? (
          <div className="bg-white w-60 h-fit rounded-lg py-3 px-4 text-sm shadow-sm">
            <input
              type="text"
              autoFocus
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="Note title..."
            />
            <div className="mt-2 w-full flex justify-between">
              <Button text="Save" extraClasses="mr-2" onClick={handleAdd} />
              <Button text="Cancel" color="transparent" onClick={handleCancel} />
            </div>
          </div>
        ) : (
          <div
            className="bg-white hover:bg-gray-100 w-60 h-fit rounded-lg py-3 px-4 text-sm shadow-sm cursor-pointer font-bold"
            onClick={() => setIsAdding(true)}
          >
            + Add a new note
          </div>
        )}
      </main>
    </div>
  );
}

export default Board;
