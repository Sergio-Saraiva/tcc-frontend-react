import axios from "axios";
const api = axios.create({
  baseURL:
    "prod" === "development"
      ? "http://localhost:3334/api"
      : "https://back-end-tcc-avaliacao-mestrad.herokuapp.com/api",
});
console.log(api);
export default api;
