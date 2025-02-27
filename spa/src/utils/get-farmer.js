export async function getFarmer() {
    try {
      const response = await fetch('http://localhost:3000/api/get-all-farmers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Operação bem sucedida', data);
        return data;
      } else {
        console.error('Falha na operação. Status:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Erro ao tentar fazer a operação', error.message);
      return false;
    }
  }