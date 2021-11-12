import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/EnefSaenz/CRUDReduxServer/",
});

export default axiosClient;
