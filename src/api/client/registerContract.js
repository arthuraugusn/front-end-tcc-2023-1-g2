import api from "../api";
// import { loadTypeofPay} from '../client/loadTypeofPay';

export const registerContract = (contract, id, setResponseError) => {
  api
    .post("contract", {})
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
