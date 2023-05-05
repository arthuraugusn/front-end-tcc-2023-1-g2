import api from "../api";

export const loginDriver = (setDriver, driver) => {
  api
    .post("driver/login", {
      email: driver.email,
      senha: driver.uid,
    })
    .then((response) => {
      if (response.status != 200) {
        setDriver({
          code: 404,
        });
      } else if (response.status == 200) {
        setDriver({
          data: response.data,
          code: response.status,
          status_user_driver: 1,
        });
      }
    })
    .catch((err) => {
      setDriver({
        code: 404,
      });
    });
};
