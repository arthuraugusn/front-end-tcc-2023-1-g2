import api from "../api"

export const loadUserContract = (id, setAllUserContracts) =>{
  api 
  .get(`contracts/${id}`)
    .then((response) => console.log(response.data))
  .catch((err)=>{
    console.log("Erro" + err);
  })
}
