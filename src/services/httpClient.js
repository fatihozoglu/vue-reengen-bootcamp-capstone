import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
  },
});

export default httpClient;
