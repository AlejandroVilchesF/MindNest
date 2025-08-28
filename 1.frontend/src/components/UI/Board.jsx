import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Note from "@/components/UI/Note";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Dropdown from "./Dropdown";

function Board({
  board,
  onToggleNoteCompleted,
  onDescriptionChange,
  onAddNote,
  onAddTask,
  onDeleteNote,
  onTitleChange,
  onBoardDelete,
  onColorChange
}) {
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
    <div className="flex-1 flex flex-col" style={{ backgroundColor: board.background_color }}>
      {/* Subheader */}
      <div className="w-full h-14 px-6 bg-black/30 text-white flex items-center justify-between shadow-sm border-b border-white/10">
        <div className="font-bold">{board.board_name}</div>
        <div className="flex items-center space-x-3 text-sm text-white/80">
          <div className="text-right">
            <div className="font-medium">{board.created_by.user_name}</div>
            <div>{formatDate(board.created)}</div>
          </div>
          {/* Dropdown */}
          <Dropdown buttonContent={<EllipsisVerticalIcon className="w-5 h-5 text-white cursor-pointer" />} side="right">
            {(closeDropdown) => (
              <>
                {/* Color picker */}
                <div className="px-3 py-2 text-black hover:bg-gray-100 w-full flex items-center gap-2 cursor-pointer">
                  <input type="color"
                    value={board.background_color}
                    onChange={(e) => {
                      onColorChange(board.board_id, e.target.value);
                    }}
                    className="w-5 h-5 p-0 border-0 cursor-pointer"
                  />
                  <span>Change color</span>
                </div>

                {/* Delete button */}
                <button
                  className="px-3 py-2 text-black hover:bg-gray-100 text-left w-full flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    onBoardDelete(board.board_id);
                    closeDropdown();
                  }}
                >
                  <TrashIcon className="w-5 h-5" /> Delete
                </button>
              </>
            )}
          </Dropdown>

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
            onTitleChange={onTitleChange}
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
              <Button
                text="Cancel"
                color="transparent"
                onClick={handleCancel}
              />
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
