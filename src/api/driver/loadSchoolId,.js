import api from "../api";

export const loadSchoolId = (id, setSchool) => {
  api.get(`school/${id}`).then((response) => {
    setSchool(response.data);
  });
};
