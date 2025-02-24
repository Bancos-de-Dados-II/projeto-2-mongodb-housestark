import { Input } from '../components/input'
import { Button } from '../components/button'
import { Map } from '../components/map'
import { NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
import { createFarmer } from '../utils/create-farmer'

export function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [position, setPosition] = useState([-6.890048, -38.555859]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tamanhoTerreno, setTamanhoTerreno] = useState("");

  function onChange(e) {
    setSearch(e.target.value);
  }

  function onKeyUp(e){
    if (e.key == "Enter") {
      handleSearch();
      e.target.blur();
    }
  }

  function handleSearch() {
    fetch(`https://nominatim.openstreetmap.org/search?q=${search}&format=json`)
      .then(response => response.json())
      .then(data => {
        let centro = [Number(data[0].lat),Number(data[0].lon)];
        setPosition(centro);
      })
  }

  async function handleSave(){
    console.log(nome, email, telefone, tamanhoTerreno, position);
    let requisition = await createFarmer(nome, email, telefone, tamanhoTerreno, position[0], position[1]);
    if(requisition) {
      navigate('/agricultores');
    } else {
      alert("Informações incorretas");
      setNome("");
      setEmail("");
      setTelefone("");
      setTamanhoTerreno("");
    }
  }

  return (
    <div className='bg-slate-300 h-screen p-8 grid grid-cols-2 gap-8'>
      <main className='bg-slate-50 p-8 rounded-xl'>
        <h1 className='text-2xl font-bold mb-4'>Family Farming</h1>
        <div className='flex justify-between items-center mb-4 mt-4'>
          <h1 className='text-lg font-medium text-slate-700'>Criar agricultor</h1>
          <NavLink to="/agricultores">
            <Button>Lista</Button>
          </NavLink>
        </div>
        <div className='flex flex-col gap-4 mb-4'>
          <Input placeholder="Digite o nome" 
          onChange={(e)=> setNome(e.target.value)}
          />
          <Input placeholder="Digite o email" 
          onChange={(e)=> setEmail(e.target.value)}
          />
          <Input placeholder="Digite o telefone" 
          onChange={(e)=> setTelefone(e.target.value)}
          />
          <Input placeholder="Digite o tamanho do terreno" 
          onChange={(e)=> setTamanhoTerreno(e.target.value)} 
          />
        </div>
        <Button
        onClick={handleSave}
        >Salvar</Button>
      </main>
      <div className="flex flex-col  rounded-xl bg-slate-50">
        <div className='flex justify-between items-center gap-2 px-4 py-4'>
          <Input placeholder="Procure pelo mapa" value={search} onChange={onChange} onKeyUp={onKeyUp}/>
          <Button onClick={handleSearch} >Buscar</Button>
        </div>
        <div className='flex-grow'>
          <Map position={position} setPosition={setPosition}/>
        </div>
      </div>
    </div>
  )
}
