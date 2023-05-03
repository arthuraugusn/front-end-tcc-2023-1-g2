import api from "../api";

export const loadSchoolsDrivers = (setSchoolsDriver, setResponseError) => {
  api
    .get("schools")
    .then((response) => {
      setSchoolsDriver(response.data.schools);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
