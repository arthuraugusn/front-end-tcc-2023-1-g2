import api from "../api";

export const loadSchoolsDriverById = (idMotorista, setResponseError) => {
  api
    .get(`driverSchools/${idMotorista}`)
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err.response);
    });
};
