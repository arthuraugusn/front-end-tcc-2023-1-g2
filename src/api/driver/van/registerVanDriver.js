import api from "../../api";

export const registerVanDriver = (van, setResponseError) => {
  api
    .post("van", {
      placa: `${van.placa}`,
      foto: `${van.foto}`,
      quantidade_vagas: van.quantidade_vagas,
      id_modelo: 6,
      id_motorista: van.id_motorista,
      status_van: 1,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
