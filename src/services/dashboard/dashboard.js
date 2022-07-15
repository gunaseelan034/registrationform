import axios from "axios";
import { BASE_URL } from "../config";

export const getAdmissionAppliedDetails = (values) => {
  return axios(BASE_URL + `/user/get/${values}`, {
    method: "GET",
  })
    .then((resp) => resp)
    .catch((err) => err);
};

export const getAdmissionAppliedDetailsById = (values) => {
  return axios(BASE_URL + `/user/getbyid/${values}`, {
    method: "GET",
  })
    .then((resp) => resp)
    .catch((err) => err);
};

export const getUserByQueryFilter = (values) => {
  return axios(BASE_URL + `/user/getstudentbyqueryfilter/${values}`, {
    method: "GET",
  });
};

export const updateApplicationStatus = (values) => {
  return axios(BASE_URL + `/user/updatestatus`, {
    method: "put",
    data: values,
  })
    .then((resp) => resp)
    .catch((err) => err);
};
