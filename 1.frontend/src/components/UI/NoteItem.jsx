import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";


function NoteItem({ note, onClick, onDeleteNote }) {
  if (!note.parent_note) {
    return (
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-lg" key={note.id}>
          {note.note_title}
        </h1>
        <Dropdown buttonContent={<EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />}>
          <button className="px-3 py-2 hover:bg-gray-100 text-left w-full">Edit</button>
          <button className="px-3 py-2 hover:bg-gray-100 text-left w-full" onClick={() => onDeleteNote(note.note_id)}>Delete</button>
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
