import api from "../api";

export const deleteSchoolDriverById = (
  idEsola,
  idMotorista,
  setResponseError
) => {
  api
    .delete(`driverSchool/escola/${idEsola}/motorista/${idMotorista}`)
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err.response);
    });
};
