import axios from "axios";
import { BASE_URL } from "../config";

export const getInterViewList = (values) => {
    return axios(BASE_URL + `/user/getinterviewlist`, {
      method: "GET",
    })
      .then((resp) => resp)
      .catch((err) => err);
  };