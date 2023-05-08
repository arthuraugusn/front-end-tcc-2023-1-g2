import api from "../../api";

export const loadVanById = (id, setVan) => {
  api
    .get(`van/${id}`)
    .then((response) => {
      setVan(response.data);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
