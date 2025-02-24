/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { deleteFarmer } from "../utils/delete-farmer";
import { updateFarmer } from "../utils/update-farmer";

export function Modal({ isOpen, onClose, farmer, atualizarCards, getPosition }) {
  if (!isOpen) return null;

  const [editedFarmer, setEditedFarmer] = useState(farmer);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedFarmer((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSave() {
    console.log(editedFarmer);
    let pos = getPosition();
    console.log(pos);
    const requisition = await updateFarmer(editedFarmer.id ,editedFarmer.nome, editedFarmer.email, 
      editedFarmer.telefone, editedFarmer.tamanhoTerreno, pos[0], pos[1]);
     if(requisition) {
      await atualizarCards();
      alert("Atualização feita");
      onClose();  
     } else {
       alert("Falha na atualização");
     }
    
  }

  async function handleDelete() {
    await deleteFarmer(editedFarmer.id);
    await atualizarCards();
    alert("Fazendeiro excluído");
    onClose();
  }

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 pointer-events-none">
      <div className="bg-white w-[350px] p-6 rounded-r-lg overflow-y-auto z-50 pointer-events-auto">
        <h2 className="text-xl font-bold mb-4">Editar Informações do Fazendeiro</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            name="nome"
            value={editedFarmer.nome}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={editedFarmer.email}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={editedFarmer.telefone}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tamanho do Terreno</label>
          <input
            type="text"
            name="tamanhoTerreno"
            value={editedFarmer.tamanhoTerreno}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSave}
          >
            Salvar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleDelete}

          >
            Deletar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
