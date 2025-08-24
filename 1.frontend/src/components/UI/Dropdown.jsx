import { useState, useRef, useEffect } from "react";

function Dropdown({ buttonContent, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer hover:bg-gray-200 p-1 rounded"
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
          <div className="flex flex-col">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;