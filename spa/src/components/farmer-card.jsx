import { useState } from 'react'
import { Button } from './button'

export function FarmCard({ nome, email, telefone, position , tamanhoTerreno, mudarPosicao}) {

  function changePosition() {
    mudarPosicao(position);
  }
  
  return (
    <>
      <div onClick={changePosition} className="w-full cursor-pointer">
        <div className=" text-black">
          <div className='flex justify-between p-2 rounded border border-primary'>
            <div>
              <p><strong>Nome: </strong>{nome}</p>
              <p><strong>Email: </strong>{email}</p>
            </div>
            <div>
            <p><strong>Tamanho do terreno: </strong>{tamanhoTerreno} m²</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

