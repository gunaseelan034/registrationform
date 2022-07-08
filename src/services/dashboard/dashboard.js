import axios from "axios";
import { BASE_URL } from "../config";

export const getAdmissionAppliedDetails = () => {
  return axios( BASE_URL + "/user/get", {
    method: "GET",
  })
    .then((resp) => resp)
    .catch((err) => err);
};
