import api from "../api";

export const loadSchools = (setSchools) => {
  api
    .get("schools")
    .then((response) => {
      setSchools(response.data.school);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
