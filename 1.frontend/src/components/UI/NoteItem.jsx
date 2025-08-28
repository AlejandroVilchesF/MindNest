import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { TrashIcon} from "@heroicons/react/24/outline";
import { PencilSquareIcon} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Button from "@/components/UI/Button";


function NoteItem({ note, onClick, onDeleteNote, onTitleChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.note_title || "");

  const handleSave = () => {
    if (newTitle.trim() !== "") {
      onTitleChange(note.note_id, newTitle);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewTitle(note.note_title);
    setIsEditing(false);
  };
  
  if (!note.parent_note) {
    return (
      <div className="flex items-center justify-between mb-2">
        {isEditing ? (
          <div className="flex-1 mr-2">
            <input
              type="text"
              autoFocus
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="Edit title..."
            />
            <div className="mt-2 flex gap-2">
              <Button text="Save" onClick={handleSave} />
              <Button text="Cancel" color="transparent" onClick={handleCancel} />
            </div>
          </div>
        ) : (
          <h1 className="font-bold text-lg cursor-pointer" onClick={() => setIsEditing(true)}>{note.note_title}</h1>
        )}
        <Dropdown buttonContent={<EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />}>
          <button className="px-3 py-2 hover:bg-gray-100 text-left w-full flex items-center gap-2" onClick={() => onDeleteNote(note.note_id)}>
            <TrashIcon className="w-5 h-5"/> Delete
          </button>
        </Dropdown>
      </div>
    );
  }

  const completionBgClass = note.completed
    ? "bg-green-100 hover:bg-green-50"
    : "bg-white hover:bg-gray-100";

  return (
    <p
      className={`${completionBgClass} rounded-md p-2 mb-2 shadow-sm text-sm text-gray-700 cursor-pointer`}
      key={note.id}
      onClick={() => onClick(note)}
    >
      {note.note_title}
    </p>
  );
}

export default NoteItem;
