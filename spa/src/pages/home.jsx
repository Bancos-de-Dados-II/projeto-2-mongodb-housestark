import { Header } from '../components/header';
import { useNavigate } from 'react-router';
import { Footer } from '../components/footer';

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header navigate={navigate} />
      <div className='bg-slate-300 p-8 pt-0'>
        <section className='bg-slate-50 p-8 rounded-xl'>
          <div className='flex justify-between'>
            <div className='flex-col self-center max-w-lg'>
              <h1 className='text-5xl font-bold mb-3'>GreenTech</h1>
              <h4 className='text-xl font-semibold mb-3'>Junte-se à maior rede de agricultores do mercado</h4>
              <p className='mb-4'>Cadastre sua propriedade e conecte-se com outros agricultores pelo Brasil. Veja no mapa as propriedades cadastradas, compartilhe informações e impulsione sua produção.</p>
              <button 
                className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition'
                onClick={() => navigate('/cadastro')}
              >
                Cadastre sua propriedade
              </button>
            </div>
            <div>
              <img className='rounded-xl w-96' src='https://media.istockphoto.com/id/649730316/pt/foto/tranquil-view-of-corn-farm-during-sunset.jpg?s=612x612&w=0&k=20&c=4nbXd-xJWnzsLHcHsX-FD_cHcBL6FydcGXJhjOOjukw=' alt='Fazenda ao pôr do sol' />
            </div>
          </div>
        </section>
        
        <section className='mt-10 bg-white p-8 rounded-xl shadow-lg'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Benefícios do GreenTech</h2>
          <div className='grid grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>Conectividade</h3>
              <p>Encontre outros agricultores próximos e compartilhe experiências.</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>Visibilidade</h3>
              <p>Apresente sua propriedade para possíveis parcerias e investidores.</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>Oportunidades</h3>
              <p>Descubra novas formas de melhorar sua produção com tecnologia.</p>
            </div>
          </div>
        </section>
        <section className='mt-10 p-8 bg-green-100 rounded-xl shadow-lg'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Entre em Contato</h2>
          <p className='text-center mb-4'>Tem dúvidas ou quer saber mais? Envie-nos uma mensagem!</p>
          <form className='max-w-lg mx-auto'>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold'>Nome</label>
              <input type='text' className='w-full p-2 border rounded-lg' placeholder='Seu nome' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold'>Email</label>
              <input type='email' className='w-full p-2 border rounded-lg' placeholder='Seu email' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold'>Mensagem</label>
              <textarea className='w-full p-2 border rounded-lg' rows='4' placeholder='Sua mensagem'></textarea>
            </div>
            <button className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-full'>
              Enviar
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
