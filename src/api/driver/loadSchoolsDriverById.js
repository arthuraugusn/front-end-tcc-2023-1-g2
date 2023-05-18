import api from "../api";

export const loadSchoolsDriverById = (idMotorista, setResponseError) => {
  api
    .get(`driverSchools/${idMotorista}`)
    .then((response) => {
      setResponseError({
        response: response.data,
        code: response.status,
      });
    })
    .catch((err) => {
      setResponseError({
        response: err.response.data,
        code: err.response.status,
      });
    });
};
