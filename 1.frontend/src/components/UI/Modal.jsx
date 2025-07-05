function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    // Overlay: full-screen background behind the modal
    <div className="fixed inset-0 w-full bg-black/30 flex justify-center items-center z-50" onClick={onClose}>
      {/* Modal container: white box in the center */}
      <div className="bg-white py-4 px-6 rounded shadow-xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
