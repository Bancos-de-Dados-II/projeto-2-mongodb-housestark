
export function Input({placeholder, value, onChange, onKeyUp}) {
  return (
    <input
      className="p-1 px-2 border border-gray-300 rounded-md outline-none text-lg w-full"
      placeholder={placeholder} 
      type="text"
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp} />
  )
}
