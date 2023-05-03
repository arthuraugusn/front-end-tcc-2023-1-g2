import api from "../api"

exports deleteContractUser = (id, setStatusCode) =>{
  api 
  .delete (`delete/${id}`)
  .then((reponse)=>{
    setStatusCode(response.status)
  })
}