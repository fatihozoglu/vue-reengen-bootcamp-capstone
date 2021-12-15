import axios from "axios";
import authHeader from "./authHeader";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "x-access-token": authHeader(),
  },
});

export default httpClient;
