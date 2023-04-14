import api from "../api";

export const loadSchools = (setSchools) => {
  api
    .get("schools")
    .then((response) => {
      const { school } = response.data;
      setSchools(school);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
