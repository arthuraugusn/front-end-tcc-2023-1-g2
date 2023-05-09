import api from "../../api";

export const updateVan = (idVan, van, setResponseError) => {
  api
    .put(`van/${idVan}`, {
      placa: van.placa,
      foto: van.foto,
      quantidade_vagas: van.quantidade_vagas,
      id_modelo: van.id_modelo,
      id_motorista: van.id_motorista,
      status_van: 1,
    })
    .then((response) => {
      setResponseError({ status: response.status, data: response.data });
    });
};
