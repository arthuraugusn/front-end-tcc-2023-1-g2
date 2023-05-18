import api from "../../api";

export const loadModeloById = (idModelo, setModelo) => {
  api.get(`model/${idModelo}`).then((response) => {
    setModelo(response.data);
  });
};
