function Button({ text, type = "normal", color = "blue", extraClasses="", onClick }) {
  // Map for different kinds of buttons
  const colors = {
    blue: {
      normal: "bg-[#00549D] text-white border border-[#00549D]",
      outline: "border border-[#00549D] border-2 font-semibold bg-transparent",
    }
  };
  // Base classes for button styles
  const baseClasses = "w-full py-2 rounded-lg transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 text-[12px] cursor-pointer";

  const typeClasses = colors[color]?.[type];

  return <button className={`${baseClasses} ${typeClasses} ${extraClasses}`} onClick={onClick}>{text}</button>;
}

export default Button;
