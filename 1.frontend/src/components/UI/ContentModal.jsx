import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

function ContentModal({ content, onClose }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${month} ${day}, ${year} | ${hours}:${minutes}`;
  };

  return (
    <>
      {/* Modal Title */}
      <div className="flex justify-between border-b border-gray-500">
        <span className="font-bold text-lg">{content.note_title}</span>
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
            <div className="flex items-center basis-[90%]">
              <Bars3BottomLeftIcon className="w-5 h-5 mr-2" />
              <span className="text-md font-semibold">Description</span>
            </div>
            {/* Button */}
            <div></div>
          </div>
          {/* Left Side Body */}
          <div className="mt-2 cursor-pointer mr-2">
            {content.description}
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
                <strong className="font-semibold">{content.created_by.user_name}</strong> added this note.
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
