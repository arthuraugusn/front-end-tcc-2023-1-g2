import api from "../../api";

export const loadModelVan = (setResponseError) => {
  api
    .get("models")
    .then((response) => {
      setResponseError(response.data.models);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
