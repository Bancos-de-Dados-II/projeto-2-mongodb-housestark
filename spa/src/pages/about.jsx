import { Header } from "../components/header.jsx"
import {TeamCard} from "../components/team-card.jsx"

export function About() {
  return (
    <div className="min-h-screen bg-slate-300">
      <Header />
      <main className="px-8 pt-0 mx-auto py-8">

        <section className="mb-12 bg-slate-50 w-full rounded-xl p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Sobre nosso sistema GreenTech</h1>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Nossa missão</h2>
          <p className="text-lg text-gray-700">
          Dedicamo-nos a capacitar os agricultores, fornecendo um sistema robusto e fácil de usar para gerenciar suas informações. Nosso aplicativo CRUD (Criar, Ler, Atualizar, Excluir) simplifica o gerenciamento de dados, permitindo que os agricultores se concentrem no que fazem de melhor: cultivar a terra e alimentar o mundo.
          </p>
        </section>

        <section className="mb-12 bg-slate-50 w-full rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Principais recursos</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Cadastro fácil de novos agricultores</li>
            <li>Perfis abrangentes de agricultores</li>
            <li>Atualizações rápidas para informações do agricultor</li>
            <li>Recursos eficientes de pesquisa e filtro</li>
            <li>Gerenciamento seguro de dados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Nosso time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "José Henrique", role: "Frontend Developer", img: "henrique.png" },
              { name: "Islan Pereira", role: "Backend Developer", img: "ft-islan.jpg"  },
              { name: "Gustavo Pereira", role: "Full Stack Developer", img: "ft-perfil.png"  },
            ].map((member, index) => (
              <TeamCard key={index} name={member.name} role={member.role} img={member.img} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

