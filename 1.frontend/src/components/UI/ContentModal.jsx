import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

function ContentModal({ content, onClose }) {
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
      <div className="mt-3 flex gap-2">
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
          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis
            molestias nisi autem, laudantium suscipit ad consectetur dicta fuga
            aut dolorum soluta, repudiandae dolor tempora? Optio non modi vitae
            assumenda.
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
        </div>
      </div>
    </>
  );
}

export default ContentModal;
