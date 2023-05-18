import api from "../../api";

export const registerVanDriver = (van, setResponseError) => {
  api
    .post("van", {
      placa: `${van.placa}`,
      foto: `${van.img}`,
      quantidade_vagas: van.quantidade_vagas,
      id_motorista: van.id_motorista,
      id_modelo: van.id_modelo,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
