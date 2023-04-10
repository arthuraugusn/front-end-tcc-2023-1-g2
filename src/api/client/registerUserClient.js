import api from "../api";

export const registerUserClient = (user) => {
  api
    .post("user", {
      user,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
