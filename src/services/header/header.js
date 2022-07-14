import axios from "axios";
import { BASE_URL } from "../config";

export const getSuggestionStudent = (values) => {
  return axios(BASE_URL + `/user/getstudent/${values}`, {
    method: "GET",
  })
    .then((resp) => resp)
    .catch((err) => err);
};
