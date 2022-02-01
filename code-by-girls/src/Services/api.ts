import axios from "axios";

export const api = axios.create({
  baseURL: "https://code-by-girls-json-server.herokuapp.com/",
});
