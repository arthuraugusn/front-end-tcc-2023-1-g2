import { useEffect, useState } from 'react';
import { loadUserContract } from '../../../api/client/loadUserContract';

import './style.css'

export const ContractsPage = () => {

  const [setAllUserContracts] = useState([]);

  useEffect(() => {
    loadUserContract(setAllUserContracts)
  })
  return (
    <main className='main-container-allcontracts'>
      <div className="name-container">
        <h1>Seus Contratos</h1>
      </div>
      <div className="allContracts-container"></div>
    </main>
  )

}