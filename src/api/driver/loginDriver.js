import api from "../api";

export const loginDriver = (setDriver, driver) => {
  api
    .post("driver/login", {
      email: driver.email,
      senha: driver.uid,
    })
    .then((response) => {
      setDriver({ data: response.data, code: response.status });
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
