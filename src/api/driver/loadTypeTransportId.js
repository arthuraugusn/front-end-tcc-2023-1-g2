import api from "../api";

export const loadTypeTransportId = (id, setTYpeTransport) => {
  api.get(`typeContract/${id}`).then((response) => {
    setTYpeTransport(response);
  });
};
