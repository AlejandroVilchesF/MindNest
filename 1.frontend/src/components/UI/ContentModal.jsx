import { useState, useEffect } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Button from "@/components/UI/Button";

function ContentModal({
  content,
  onClose,
  onToggleNoteCompleted,
  onDescriptionChange,
}) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${month} ${day}, ${year} | ${hours}:${minutes}`;
  };

  const [completed, setCompleted] = useState(content.completed);
  const [description, setDescription] = useState(content.description || "");
  const [toggleEditor, setEditor] = useState(false);
  const [originalDescription, setOriginalDescription] = useState("");

  useEffect(() => {
    setCompleted(content.completed);
  }, [content.completed]);

  useEffect(() => {
    setDescription(content.description || "");
  }, [content.description]);

  const handleToggle = () => {
    setCompleted(!completed);
    onToggleNoteCompleted(content.note_id);
  };

  const CompletedIcon = completed ? CheckCircleIcon : MinusCircleIcon;
  const iconColor = completed ? "text-green-500" : "text-gray-400";

  const handleStartEdit = () => {
    setOriginalDescription(description);
    setEditor(true);
  };

  const handleCancel = () => {
    setDescription(originalDescription);
    onDescriptionChange(originalDescription);
    setEditor(false);
  };

  const markdownStyles = { backgroundColor: "#ffffff", color:"#000000"}

  return (
    <>
      {/* Modal Title */}
      <div className="flex justify-between border-b border-gray-500">
        {/* Title and Check */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{content.note_title}</span>
          <CompletedIcon
            className={`w-5 h-5 ml-2 cursor-pointer ${iconColor}`}
            onClick={handleToggle}
          />
        </div>
        {/* Close Button */}
        <button onClick={onClose} className="text-gray-500 cursor-pointer">
          &times;
        </button>
      </div>
      {/* Modal Body */}
      <div className="mt-3 flex gap-3">
        {/* Left Side */}
        <div className="flex-column basis-[65%] border-r">
          {/* Left Side Header */}
          <div className="flex justify-between items-center">
            {/* Text and Icon */}
            <div className="flex items-center">
              <Bars3BottomLeftIcon className="w-5 h-5 mr-2" />
              <span className="text-md font-semibold">Description</span>
            </div>
          </div>
          {/* Left Side Body. Description and Editing*/}
          <div className="mt-2 cursor-pointer mr-2" onClick={() => setEditor(!toggleEditor)}>
            {toggleEditor ? (
              <div onClick={(e) => e.stopPropagation()}>
                <MDEditor
                  value={description}
                  onChange={(val) => {
                    setDescription(val);
                    onDescriptionChange(val);
                  }}
                  preview="edit"
                  style={markdownStyles}
                />
                <div className="mt-2 w-50 flex justify-between">
                  <Button text="Save" extraClasses="mr-2" onClick={() => setEditor(false)}/>
                  <Button text="Cancel" color="transparent" onClick={handleCancel}/>
                </div>
              </div>
            ) : (
              <div onClick={handleStartEdit}>
                <MDEditor.Markdown 
                  source={description || ""} 
                  style={markdownStyles}
                />
              </div>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="basis-[35%]">
          {/* Right Side Header */}
          <div className="flex justify-between items-center">
            {/* Text and Icon */}
            <div className="flex items-center basis-[90%]">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
              <span className="text-md font-medium">Activity</span>
            </div>
          </div>
          {/* Right Side Body */}
          <div className="mt-2">
            {/* Historic */}
            <div>
              {/* User */}
              <div>
                <strong className="font-semibold">
                  {content.created_by.user_name}
                </strong>{" "}
                added this note.
              </div>
              {/* Date */}
              <div className="text-gray-600 text-sm">
                {formatDate(content.created)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentModal;
