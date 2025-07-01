import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Note from "@/components/UI/Note";

function Board({ board }) {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const groupNotes = (notes) => {
    const grouped = {};
    //Group all the notes per parent
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

  return (
    <div className="flex-1 flex flex-col">
      {/* Subheader */}
      <div className="w-full h-14 px-6 bg-black/30 text-white flex items-center justify-between shadow-sm border-b border-white/10">
        {/* Left side */}
        <div className="font-bold">{board.board_name}</div>
        {/* Right side group */}
        <div className="flex items-center space-x-3 text-sm text-white/80 leading-tight">
          {/* Name and Date */}
          <div className="text-right">
            <div className="font-medium">{board.created_by.user_name}</div>
            <div>{formatDate(board.created)}</div>
          </div>
          {/* Options Button */}
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
        {groupNotes(board.notes).map((group) => (<Note key={group.parentId} notes={group.notes} />))}
        <div className="bg-white hover:bg-gray-100 w-60 h-fit rounded-lg py-3 px-4 text-sm shadow-sm cursor-pointer font-bold">+ Add a new note</div>
      </main>
    </div>
  );
}

export default Board;
