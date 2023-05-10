import api from "../api";
import qs from "qs";

export const getDriverByFilters = (
  idPreco,
  idEscola,
  nomeMotorista,
  setFilter
) => {
  if (
    idPreco != "" &&
    idPreco != undefined &&
    idEscola != undefined &&
    idEscola != "" &&
    nomeMotorista != "" &&
    nomeMotorista != undefined
  ) {
    api
      .post(
        `filter-drivers/?${qs.stringify({ price: idPreco })}&${qs.stringify({
          school: idEscola,
        })}&${qs.stringify({ driverName: nomeMotorista })}`
      )
      .then((response) => [setFilter(response)]);
  } else if (
    idPreco != "" &&
    idPreco != undefined &&
    idEscola != undefined &&
    idEscola != ""
  ) {
    api
      .post(
        `filter-drivers/?${qs.stringify({ price: idPreco })}&${qs.stringify({
          school: idEscola,
        })}`
      )
      .then((response) => {
        setFilter(response);
      });
  } else if (
    idPreco != "" &&
    idPreco != undefined &&
    nomeMotorista != "" &&
    nomeMotorista != undefined
  ) {
    api
      .post(
        `filter-drivers/?${qs.stringify({ price: idPreco })}&${qs.stringify({
          driverName: nomeMotorista,
        })}`
      )
      .then((response) => {
        setFilter(response);
      });
  } else if (
    idEscola != undefined &&
    idEscola != "" &&
    nomeMotorista != "" &&
    nomeMotorista != undefined
  ) {
    api
      .post(
        `filter-drivers/?${qs.stringify({ school: idEscola })}&${qs.stringify({
          driverName: nomeMotorista,
        })}`
      )
      .then((response) => {
        setFilter(response);
      });
  } else if (
    idEscola != undefined &&
    idEscola != "" &&
    idPreco != "" &&
    idPreco != undefined
  ) {
    api
      .post(
        `filter-drivers/?${qs.stringify({ school: idEscola })}&${qs.stringify({
          price: idPreco,
        })}`
      )
      .then((response) => {
        setFilter(response);
      });
  } else if (idEscola != undefined && idEscola != "") {
    api
      .post(`filter-drivers/?${qs.stringify({ school: idEscola })}`)
      .then((response) => {
        setFilter(response);
      });
  } else if (idPreco != "" && idPreco != undefined) {
    api
      .post(`filter-drivers/?${qs.stringify({ price: idPreco })}`)
      .then((response) => {
        setFilter(response);
      });
  }
  if (nomeMotorista != "" && nomeMotorista != undefined) {
    api
      .post(`filter-drivers/?${qs.stringify({ driverName: nomeMotorista })}`)
      .then((response) => {
        console.log(response);
        setFilter(response);
      });
  }
};
