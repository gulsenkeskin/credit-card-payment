import axios from "axios";
import { ApiURL } from "./Constants";


var Http = axios.create({
  baseURL: ApiURL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  timeout: 40000,
  /* transformRequest: [function (data) {
           return querystring.stringify(data);
       }],*/
  withCredentials: true,
});

export { Http };
