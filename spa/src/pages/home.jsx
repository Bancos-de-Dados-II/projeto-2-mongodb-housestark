import { Header } from '../components/header';
import { useNavigate } from 'react-router'

export function Home() {
  const navigate = useNavigate();

  console.log("teste");
  

  return (
    <div>
      <Header navigate={navigate} />
    <div className='bg-slate-300 h-screen p-8 pt-0 '>
      <main className='bg-slate-50 p-8 rounded-xl'>
          <div className='flex justify-between'>
            <div className='flex-col self-center'>
              <h1 className='text-3xl font-bold mb-1'>GreenTech</h1>
              <h4 className='text-1xl font-bold mb-3'>Junte-se a maior rede de agricultores do mercado</h4>
              <p>Cadastre sua propriedade e conheça outras perto de você</p>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/649730316/pt/foto/tranquil-view-of-corn-farm-during-sunset.jpg?s=612x612&w=0&k=20&c=4nbXd-xJWnzsLHcHsX-FD_cHcBL6FydcGXJhjOOjukw=" alt="" />
            </div>
          </div>
      </main>
    </div>
    </div>
  )
}
