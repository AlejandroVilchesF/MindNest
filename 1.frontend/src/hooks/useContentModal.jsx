import { useReducer, useEffect } from "react";

const initialState = {
  completed: false,
  description: "",
  isEditing: false,
  originalDescription: "",
};

function contentModalReducer(state, action) {
  switch (action.type) {
    case "INIT_CONTENT":
      return {
        ...state,
        completed: action.payload.completed,
        description: action.payload.description || "",
      };
    case "TOGGLE_COMPLETED":
      return { ...state, completed: !state.completed };
    case "START_EDIT":
      return {
        ...state,
        isEditing: true,
        originalDescription: state.description,
      };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SAVE_DESCRIPTION":
      return { ...state, isEditing: false };
    case "CANCEL_EDIT":
      return {
        ...state,
        description: state.originalDescription,
        isEditing: false,
      };
    default:
      return state;
  }
}

export function useContentModal(
  content,
  onToggleNoteCompleted,
  onDescriptionChange
) {
  const [state, dispatch] = useReducer(contentModalReducer, initialState);

  useEffect(() => {
    dispatch({ type: "INIT_CONTENT", payload: content });
  }, [content]);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_COMPLETED" });
    onToggleNoteCompleted(content.note_id);
  };

  const handleStartEdit = () => {
    dispatch({ type: "START_EDIT" });
  };

  const handleDescriptionChange = (value) => {
    dispatch({ type: "UPDATE_DESCRIPTION", payload: value });
    onDescriptionChange(content.note_id, value);
  };

  const handleSaveDescription = () => {
    dispatch({ type: "SAVE_DESCRIPTION" });
    onDescriptionChange(content.note_id, state.description);
  };

  const handleCancel = () => {
    dispatch({ type: "CANCEL_EDIT" });
    onDescriptionChange(content.note_id, state.originalDescription);
  };

  return {
    state,
    handleToggle,
    handleStartEdit,
    handleDescriptionChange,
    handleSaveDescription,
    handleCancel,
  };
}
