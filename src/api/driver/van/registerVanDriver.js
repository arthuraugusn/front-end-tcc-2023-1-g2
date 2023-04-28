import api from "../../api";

export const registerVanDriver = (van, setResponseError) => {
  api
    .post("van", {
      placa: `${van.placa}`,
      foto: `${van.img}`,
      quantidade_vagas: van.quantidade_vagas,
      id_modelo: 1,
      id_motorista: van.id_motorista,
      status_van: van.status_van,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
