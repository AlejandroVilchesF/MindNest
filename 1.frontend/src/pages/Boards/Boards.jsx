import Sidebar from "@/components/Layout/Sidebar";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

function Boards() {
  // Example Board to work with the frontend
  const board = {
    board_id: 1,
    board_name: "Daily Tasks",
    created: "2025-06-01T09:00:00Z",
    modified: "2025-06-02T10:00:00Z",
    created_by: {
      user_id: 10,
      user_name: "johndoe",
      user_email: "john@example.com",
    },
    notes: [
      {
        note_id: 1,
        note_title: "Morning Routine",
        completed: false,
        position: 1,
        parent_note: null,
        created: "2025-06-01T09:05:00Z",
        modified: "2025-06-01T09:30:00Z",
      },
      {
        note_id: 2,
        note_title: "Meditate for 10 minutes",
        completed: true,
        position: 1,
        parent_note: 1,
        created: "2025-06-01T09:06:00Z",
        modified: "2025-06-01T09:15:00Z",
      },
    ],
  };
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className="flex h-full bg-[#8f3f65]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
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
            <button aria-label="Board options" className="p-2 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
              <EllipsisVerticalIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Notes content */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Boards</h1>
        </main>
      </div>
    </div>
  );
}

export default Boards;
