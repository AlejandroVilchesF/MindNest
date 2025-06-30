import { useState } from "react";

export default function SidebarItem({ board, onSelectBoard  }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-300">
      {/* SidebarItem header */}
      <div className="cursor-pointer flex justify-between items-center p-2 hover:bg-gray-100">
        <span className="font-semibold" onClick={() => onSelectBoard (board.board_id)}>{board.board_name}</span>
        {/* Dropdown just if the boards has some note */}
        {board.notes.length > 0 && (
        <span onClick={() => setExpanded(!expanded)}>
            {expanded ? "▾" : "▸"}
        </span>
        )}
      </div>

      {/* Notes List */}
      {expanded && (
        <ul className="pl-4 text-sm text-gray-700">
          {board.notes
            .filter((note) => !note.parent_note)
            .map((note) => (
              <li key={note.note_id} className="py-1">
                {note.note_title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
