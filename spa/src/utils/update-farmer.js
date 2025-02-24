export async function updateFarmer(id, nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno) {
    try {
      const response = await fetch(`http://localhost:3000/api/update-farmer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno})
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Fazendeiro atualizado', data);
        return true;
      } else {
        console.error('Falha na atualização. Status:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Erro ao tentar fazer a atualização', error.message);
      return false;
    }
  }