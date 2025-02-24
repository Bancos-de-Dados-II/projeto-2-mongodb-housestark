export async function createFarmer(nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno) {
    try {
      const response = await fetch('http://localhost:3000/api/create-farmer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno})
      });
  
      if (response.status === 201) {
        const data = await response.json();
        console.log('Cadastro Bem sucedido', data);
        return true;
      } else {
        console.error('Falha no cadastro. Status:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Erro ao tentar fazer o cadastro', error.message);
      return false;
    }
  }