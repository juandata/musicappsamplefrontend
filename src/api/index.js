import axios from "axios";
const environment = "development";
export const client = axios.create({
  // eslint-disable-next-line no-undef
  baseURL:
    environment === "development"
      ? "http://localhost:3000/api"
      : "https://musicappsamplebackend.onrender.com/api",
});
