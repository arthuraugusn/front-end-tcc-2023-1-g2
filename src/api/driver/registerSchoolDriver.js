import api from "../api";

export const registerSchoolDriver = (
  idEscola,
  idMotorista,
  setResponseError
) => {
  api
    .post("driverSchool", {
      id_escola: parseInt(idEscola),
      id_motorista: parseInt(idMotorista),
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err.response);
    });
};
