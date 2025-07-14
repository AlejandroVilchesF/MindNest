import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import MDEditor from "@uiw/react-md-editor";
import Button from "@/components/UI/Button";
import { useContentModal } from "@/hooks/useContentModal";
import { formatDate } from "@/utils/dateFormatter";

function ContentModal({
  content,
  onClose,
  onToggleNoteCompleted,
  onDescriptionChange,
}) {
  const {
    state,
    handleToggle,
    handleStartEdit,
    handleDescriptionChange,
    handleSaveDescription,
    handleCancel,
  } = useContentModal(content, onToggleNoteCompleted, onDescriptionChange);

  const CompletedIcon = state.completed ? CheckCircleIcon : MinusCircleIcon;
  const iconColor = state.completed ? "text-green-500" : "text-gray-400";
  const markdownStyles = { backgroundColor: "#ffffff", color: "#000000" };

  return (
    <>
      {/* Modal Title */}
      <div className="flex justify-between border-b border-gray-500">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{content.note_title}</span>
          <CompletedIcon
            className={`w-5 h-5 ml-2 cursor-pointer ${iconColor}`}
            onClick={handleToggle}
          />
        </div>
        <button onClick={onClose} className="text-gray-500 cursor-pointer">
          &times;
        </button>
      </div>

      {/* Modal Body */}
      <div className="mt-3 flex gap-3">
        {/* Left Side */}
        <div className="flex-column basis-[65%] border-r">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bars3BottomLeftIcon className="w-5 h-5 mr-2" />
              <span className="text-md font-semibold">Description</span>
            </div>
          </div>

          <div
            className="mt-2 cursor-pointer mr-2"
            onClick={() => !state.isEditing && handleStartEdit()}
          >
            {state.isEditing ? (
              <div onClick={(e) => e.stopPropagation()}>
                <MDEditor
                  value={state.description}
                  onChange={handleDescriptionChange}
                  preview="edit"
                  style={markdownStyles}
                />
                <div className="mt-2 w-50 flex justify-between">
                  <Button
                    text="Save"
                    extraClasses="mr-2"
                    onClick={handleSaveDescription}
                  />
                  <Button
                    text="Cancel"
                    color="transparent"
                    onClick={handleCancel}
                  />
                </div>
              </div>
            ) : (
              <div onClick={handleStartEdit}>
                <MDEditor.Markdown
                  source={state.description || ""}
                  style={markdownStyles}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="basis-[35%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center basis-[90%]">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
              <span className="text-md font-medium">Activity</span>
            </div>
          </div>

          <div className="mt-2">
            <div>
              <div>
                <strong className="font-semibold">
                  {content.created_by.user_name}
                </strong>{" "}
                added this note.
              </div>
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
