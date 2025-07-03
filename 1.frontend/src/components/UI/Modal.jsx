function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-xl max-w-md w-full">
        <button onClick={onClose} className="float-right text-gray-500">
          &times;
        </button>
        <div className="mt-4">Modal Body</div>
      </div>
    </div>
  );
}

export default Modal;
