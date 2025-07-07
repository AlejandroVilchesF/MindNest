import Sidebar from "@/components/Layout/Sidebar";
import Board from "@/components/UI/Board";
import { useState } from "react";

function Boards() {
  // Example Board to work with the frontend
  const [boards, setBoards] = useState([
    {
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
          created_by: {
            user_id: 10,
            user_name: "johndoe",
            user_email: "john@example.com",
          },
        },
        {
          note_id: 2,
          note_title: "Meditate for 10 minutes",
          description: "Focus on breathing and clear the mind.",
          completed: true,
          position: 2,
          parent_note: 1,
          created: "2025-06-01T09:06:00Z",
          modified: "2025-06-01T09:15:00Z",
          created_by: {
            user_id: 10,
            user_name: "johndoe",
            user_email: "john@example.com",
          },
        },
        {
          note_id: 3,
          note_title: "Make breakfast",
          description: "Prepare eggs and toast with orange juice.",
          completed: false,
          position: 3,
          parent_note: 1,
          created: "2025-06-01T09:06:00Z",
          modified: "2025-06-01T09:15:00Z",
          created_by: {
            user_id: 10,
            user_name: "johndoe",
            user_email: "john@example.com",
          },
        },
        {
          note_id: 4,
          note_title: "Afternoon Routine",
          completed: false,
          position: 1,
          parent_note: null,
          created: "2025-06-01T09:05:00Z",
          modified: "2025-06-01T09:30:00Z",
          created_by: {
            user_id: 10,
            user_name: "johndoe",
            user_email: "john@example.com",
          },
        },
        {
          note_id: 5,
          note_title: "Make dinner",
          description: "Prepare a healthy and satisfying meal that doesn't take too much time — something like a vegetable stir fry with tofu or chicken. Aim for a balance of protein, fiber, and flavor to stay energized for the rest of the day.",
          completed: false,
          position: 1,
          parent_note: 4,
          created: "2025-06-01T09:06:00Z",
          modified: "2025-06-01T09:15:00Z",
          created_by: {
            user_id: 10,
            user_name: "johndoe",
            user_email: "john@example.com",
          },
        },
      ],
    },
    {
      board_id: 2,
      board_name: "Project Launch",
      created: "2025-06-10T14:00:00Z",
      modified: "2025-06-12T16:30:00Z",
      created_by: {
        user_id: 12,
        user_name: "annasmith",
        user_email: "anna@example.com",
      },
      notes: [
        {
          note_id: 10,
          note_title: "Design Wireframes",
          completed: false,
          position: 1,
          parent_note: null,
          created: "2025-06-10T14:30:00Z",
          modified: "2025-06-10T15:00:00Z",
          created_by: {
            user_id: 12,
            user_name: "annasmith",
            user_email: "anna@example.com",
          },
        },
        {
          note_id: 11,
          note_title: "Review with UX Team",
          description: "Schedule a feedback session with the design team.",
          completed: false,
          position: 2,
          parent_note: 10,
          created: "2025-06-11T09:00:00Z",
          modified: "2025-06-11T09:45:00Z",
          created_by: {
            user_id: 12,
            user_name: "annasmith",
            user_email: "anna@example.com",
          },
        },
        {
          note_id: 12,
          note_title: "Finalize Assets",
          description:
            "Export all icons and illustrations in required formats.",
          completed: true,
          position: 3,
          parent_note: 10,
          created: "2025-06-11T10:00:00Z",
          modified: "2025-06-12T11:00:00Z",
          created_by: {
            user_id: 12,
            user_name: "annasmith",
            user_email: "anna@example.com",
          },
        },
      ],
    },
    {
      board_id: 3,
      board_name: "Empty Board",
      created: "2025-06-10T14:00:00Z",
      modified: "2025-06-12T16:30:00Z",
      created_by: {
        user_id: 12,
        user_name: "annasmith",
        user_email: "anna@example.com",
      },
      notes: [],
    },
  ]);

  //UseState to control the toggle of the check in the differents Notes
  const toggleNoteCompleted = (note_id) => {
    const updatedBoards = boards.map((board) => ({
      ...board, notes: board.notes.map((note) =>
        note.note_id === note_id ? { ...note, completed: !note.completed } : note),
    }));
    setBoards(updatedBoards);
  };

  // UseState to control which board is visualized
  const [selectedBoardId, setSelectedBoardId] = useState(boards[0]?.board_id);
  const selectedBoard = boards.find(
    (board) => board.board_id === selectedBoardId
  );

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar boards={boards} onSelectBoard={setSelectedBoardId} />
      {/* Board Content*/}
      {selectedBoard && <Board board={selectedBoard} onToggleNoteCompleted={toggleNoteCompleted} />}
    </div>
  );
}

export default Boards;
