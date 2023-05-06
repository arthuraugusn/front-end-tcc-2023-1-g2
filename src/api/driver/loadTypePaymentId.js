import api from "../api";

export const loadTypePaymentId = (id, setTypePayment) => {
  api.get(`typePayment/${id}`).then((response) => {
    setTypePayment(response);
  });
};
