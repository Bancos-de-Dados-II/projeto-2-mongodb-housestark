export function Button({ children, textColor, onClick, color }) {
  return (
    <button
      className={`p-1 ${textColor} px-2 border border-gray-300 rounded-md outline-none text-lg ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

