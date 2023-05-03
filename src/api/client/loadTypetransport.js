import api from "../api";

export const loadTypetransport = (setTypesTransport, setResponseError) => {
  api
    .get("typeContracts")
    .then((response) => {
      setTypesTransport(response.data.typesContracts);
      setResponseError(response.status);
    })
    .catch((err) => {
      console.log("Err" + err);
    });
};
