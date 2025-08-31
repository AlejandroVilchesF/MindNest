import Sidebar from "@/components/Layout/Sidebar";
import Board from "@/components/UI/Board";
import Modal from "@/components/UI/Modal";
import CreateBoardModal from "@/components/UI/CreateBoardModal";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Boards() {
  // Mock Boards to work with the frontend
  const [boards, setBoards] = useState([
    {
      board_id: 1,
      board_name: "Daily Tasks",
      created: "2025-06-01T09:00:00Z",
      modified: "2025-06-02T10:00:00Z",
      background_color: "#EAEAEA",
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
          description:
            "Prepare a healthy and satisfying meal that doesn't take too much time — something like a vegetable stir fry with tofu or chicken. Aim for a balance of protein, fiber, and flavor to stay energized for the rest of the day.",
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
      background_color: "#EAEAEA",
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
      background_color: "#EAEAEA",
      created_by: {
        user_id: 12,
        user_name: "annasmith",
        user_email: "anna@example.com",
      },
      notes: [],
    },
  ]);

  // Control the toggle of the check in the differents Notes
  const toggleNoteCompleted = (note_id) => {
    const updatedBoards = boards.map((board) => ({
      ...board,
      notes: board.notes.map((note) =>
        note.note_id === note_id
          ? { ...note, completed: !note.completed }
          : note
      ),
    }));
    setBoards(updatedBoards);
  };

  // Control the description modifications
  const handleDescriptionChange = (note_id, newDescription) => {
    const updatedBoards = boards.map((board) => ({
      ...board,
      notes: board.notes.map((note) =>
        note.note_id === note_id
          ? { ...note, description: newDescription }
          : note
      ),
    }));
    setBoards(updatedBoards);
  };

  // Function to obtain the max task id
  const obtainMaxTaskId = () => {
    const allIds = boards.flatMap(board => board.notes.map(note => note.note_id));
    return Math.max(...allIds)
  }

  // Callback to add a new note to a board
  const handleAddNote = (boardId, title) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.board_id === boardId) {
          const maxId = obtainMaxTaskId();
          const newNote = {
            note_id: maxId + 1,
            note_title: title,
            description: "",
            completed: false,
            position: board.notes.length + 1,
            parent_note: null,
            created: new Date().toISOString(),
            modified: new Date().toISOString(),
            created_by: {
              user_id: 10, // temporal
              user_name: "johndoe",
              user_email: "john@example.com",
            },
          };

          return {
            ...board,
            notes: [...board.notes, newNote],
          };
        }
        return board;
      })
    );
  };

  // Callback to add a new task to a note
  const handleAddTask = (parentNoteId, title) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        const parentExists = board.notes.some(
          (n) => n.note_id === parentNoteId
        );
        if (parentExists) {
          const maxId = prevBoards
            .flatMap((b) => b.notes.map((n) => n.note_id))
            .reduce((max, id) => Math.max(max, id), 0);

          const newTask = {
            note_id: maxId + 1,
            note_title: title,
            description: "Please click to add a description",
            completed: false,
            position: board.notes.length + 1,
            parent_note: parentNoteId,
            created: new Date().toISOString(),
            modified: new Date().toISOString(),
            created_by: {
              user_id: 10,
              user_name: "johndoe",
              user_email: "john@example.com",
            },
          };

          return {
            ...board,
            notes: [...board.notes, newTask],
          };
        }

        return board;
      })
    );
  };

  // Callback to delete a note
  const handleDeleteNote = (noteId) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => ({
        ...board,
        notes: board.notes.filter((note) => note.note_id !== noteId && note.parent_note !== noteId),
      }))
    );
  };

  // Callback to update title of a note or task
  const handleTitleChange = (noteId, newTitle) => {
    const updatedBoards = boards.map((board) => ({
      ...board,
      notes: board.notes.map((note) =>
        note.note_id === noteId
          ? { ...note, note_title: newTitle }
          : note
      ),
    }));
    setBoards(updatedBoards);
  }

  // Callback to delete boards
  const handleBoardDelete = (boardId) => {
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.filter(
        (board) => board.board_id !== boardId
      );

      const nextBoardId = updatedBoards.length > 0 ? updatedBoards[0].board_id : null;
      setSelectedBoardId(nextBoardId);

      return updatedBoards;
    });
  }

  // Callback to update background color
  const handleColorChange = (boardId, newColor) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.board_id === boardId) {
          return {
            ...board,
            background_color: newColor
          };
        }
        return board;
      })
    );
  }

  // Callback to handle board title change
  const handleBoardTitleChange = (boardId, newTitle) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.board_id === boardId) {
          return {
            ...board,
            board_name: newTitle
          };
        }
        return board;
      })
    );
  }

  // Callback to handle new boards additions
  const handleAddBoard = (boardTitle, backgroundColor) => {
    setBoards((prevBoards) => {
      const newBoard = {
        board_id: prevBoards.length + 1,
        board_name: boardTitle,
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        background_color: backgroundColor,
        created_by: {
          user_id: 10,
          user_name: "johndoe",
          user_email: "john@example.com",
        },
        notes: [],
      };
      return [...prevBoards, newBoard];
    });
  };

  // UseState to control which board is visualized
  const [selectedBoardId, setSelectedBoardId] = useState(boards[0]?.board_id);
  const selectedBoard = boards.find(
    (board) => board.board_id === selectedBoardId
  );
  // Params to control the new board modal from header
  const [searchParams, setSearchParams] = useSearchParams();
  const isNewBoardModalOpen = searchParams.get("modal") === "new";
  const handleCloseNewBoardModal = () => {setSearchParams({});};

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar boards={boards} onSelectBoard={setSelectedBoardId} />
      {/* Board Content*/}
      {selectedBoard && (
        <Board
          board={selectedBoard}
          onToggleNoteCompleted={toggleNoteCompleted}
          onDescriptionChange={handleDescriptionChange}
          onAddNote={handleAddNote}
          onAddTask={handleAddTask}
          onDeleteNote={handleDeleteNote}
          onTitleChange={handleTitleChange}
          onBoardDelete={handleBoardDelete}
          onColorChange={handleColorChange}
          onBoardTitleChange={handleBoardTitleChange}
        />
      )}
      {/* New Boards Modal */}
      <Modal isOpen={isNewBoardModalOpen} onClose={handleCloseNewBoardModal}>
        <CreateBoardModal onClose={handleCloseNewBoardModal} onAddBoard={handleAddBoard}/>
      </Modal>
    </div>
  );
}

export default Boards;
