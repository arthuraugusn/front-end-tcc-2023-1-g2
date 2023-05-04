import { useEffect, useState } from 'react';
import { loadUserContract } from '../../../api/client/loadUserContract';
import "./style.css"
import { CardContract } from '../Card';

export const ContractsPage = () => {

  const [contracts, setAllUserContracts] = useState([]);

  useEffect(() => {
    loadUserContract(1, setAllUserContracts)
  })
  return (
    <main className='main-container-allcontracts'>
      <div className="name-container">
        <h1>Seus Contratos</h1>
      </div>
      <div className="allContracts-container">
        <CardContract contracts={contracts} />
      </div>
    </main>
  )

}