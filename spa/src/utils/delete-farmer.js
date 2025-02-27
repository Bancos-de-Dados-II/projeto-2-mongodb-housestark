export async function deleteFarmer(id) {
    try {
      
      const response = await fetch(`http://localhost:3000/api/delete-farmer/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
      });
  
      
      if (response.ok) {
        const data = await response.json();
        console.log('Exclusão bem-sucedida', data);
        return true;
      } else {
        console.error('Falha na exclusão. Status:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Erro ao tentar excluir o fazendeiro:', error.message);
      return false;
    }
  }
  