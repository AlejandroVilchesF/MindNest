import { useState } from "react";
import Button from "@/components/UI/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

function CreateBoardModal({ onClose, onAddBoard }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#EAEAEA");

  const handleAddBoard = (e) => {
    if (title.trim() === "") return;
    onAddBoard(title, color);
    onClose();
  };

  return (
    <div>
      {/* Modal Header */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
        <h2 className="text-lg font-bold">Create New Board</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 font-bold text-lg cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Modal Body */}
      <div className="flex flex-col gap-4">
        {/* Title input */}
        <div>
          <label className="block text-sm font-medium mb-1">Board Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter board title..."
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Color Picker */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Background Color
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-12 h-8 p-0 border-none cursor-pointer"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <Button text="Create Board" onClick={handleAddBoard}/>
          <Button text="Cancel" color="red" type="outline" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

export default CreateBoardModal;
