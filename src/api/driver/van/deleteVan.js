import api from "../../api";

export const deleteVan = (idVan, setResponseError) => {
  api.delete(`van/${idVan}`).then((response) => {
    setResponseError(response);
  });
};
