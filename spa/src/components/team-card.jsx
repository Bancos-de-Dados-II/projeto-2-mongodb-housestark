export function TeamCard({ img, name, role }) {
  return (
    <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center">
      <img
        src={img}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}