import axios from "axios";

export const getAdmissionAppliedDetails = () => {
  return axios("http://192.168.0.112:3002/user/get", {
    method: "GET",
  })
    .then((resp) => resp)
    .catch((err) => err);
};
