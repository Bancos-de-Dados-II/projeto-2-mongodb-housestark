import { Map } from "../components/map"
import { Button } from "../components/button"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import { FarmCard } from "../components/farmer-card"
import { Modal } from "../components/modal"
import { getFarmer } from "../utils/get-farmer"
import { Input } from "../components/input"

export function List() {
  const [search, setSearch] = useState('')
  const [farmerList, setFarmerList] = useState([]);
  const [position, setPosition] = useState([-6.890048, -38.555859]);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  function onChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    fetch(`https://nominatim.openstreetmap.org/search?q=${search}&format=json`)
      .then(response => response.json())
      .then(data => {
        let centro = [Number(data[0].lat), Number(data[0].lon)];
        setPosition(centro);
      })
  }

  function onKeyUp(e) {
    if (e.key == "Enter") {
      handleSearch();
      e.target.blur();
    }
  }

  async function getAllFarmersFunction() {
    const data = await getFarmer();

    if (data) {
      setFarmerList(data);
      setPosition([-6.890048, -38.555859])
    } else {
      setFarmerList([]);
    }

  }

  useEffect(() => {
    getAllFarmersFunction();
  }, []);

  function handleChangePosition(newPosition) {
    setPosition(newPosition);
  }
  function handleCardClick(farmer) {
    setSelectedFarmer(farmer);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedFarmer(null);
  }

  function sendPosition() {
    return position;
  }

  return (
    <div className="bg-slate-300 h-screen p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      <main className="bg-slate-50 p-4 sm:p-8 rounded-xl">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Family Farming</h1>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-md sm:text-lg font-medium text-slate-700">Agricultores</h1>
          <NavLink to="/">
            <Button>Voltar</Button>
          </NavLink>
        </div>
        <div className="flex flex-col gap-4 mb-4 h-[50vh] overflow-y-scroll">
          {farmerList.length > 0 ? farmerList.map((farmer) => (
            <div key={farmer.email} onClick={() => handleCardClick(farmer)}>
              <FarmCard
                key={farmer.email}
                nome={farmer.nome}
                telefone={farmer.telefone}
                email={farmer.email}
                tamanhoTerreno={farmer.tamanhoTerreno}
                position={farmer.localizacao.coordinates}
                mudarPosicao={handleChangePosition}
              />
            </div>
          )) : <p>Nenhuma fazenda cadastrada.</p>}
        </div>
      </main>
      <div className="flex flex-col  rounded-xl bg-slate-50">
        <div
          className={`flex justify-between items-center gap-2 px-4 py-4 ${isModalOpen ? 'z-50 relative bg-white' : ''}`}
        >
          <Input placeholder="Procure pelo mapa" value={search} onChange={onChange} onKeyUp={onKeyUp} />
          <Button onClick={handleSearch}>Buscar</Button>
        </div>
        <div className='flex-grow'>
          <Map position={position} setPosition={setPosition} />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        farmer={selectedFarmer}
        atualizarCards={getAllFarmersFunction}
        getPosition={sendPosition}
      />
    </div>
  );
}