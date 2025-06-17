function Input({ label, placeholder = '', value, onChange ,type = 'text', className = '' }) {
  return (
    <div className="flex flex-col gap-1 text-left mb-4">
      {label && <label className="text-[10px] font-bold">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}

export default Input;