

export function About() {
  return (
    <div className="min-h-screen bg-slate-300">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Sobre nosso sistema GreenTech</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Nossa missão</h2>
          <p className="text-lg text-gray-700">
          Dedicamo-nos a capacitar os agricultores, fornecendo um sistema robusto e fácil de usar para gerenciar suas informações. Nosso aplicativo CRUD (Criar, Ler, Atualizar, Excluir) simplifica o gerenciamento de dados, permitindo que os agricultores se concentrem no que fazem de melhor: cultivar a terra e alimentar o mundo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Principais recursos</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Cadastro fácil de novos agricultores</li>
            <li>Perfis abrangentes de agricultores</li>
            <li>Atualizações rápidas para informações do agricultor</li>
            <li>Recursos eficientes de pesquisa e filtro</li>
            <li>Gerenciamento seguro de dados</li>
          </ul>
        </section>

        
      </main>
    </div>
  )
}

