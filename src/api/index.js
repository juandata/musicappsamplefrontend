import axios from "axios";

export const client = axios.create({
	// eslint-disable-next-line no-undef
	baseURL: process.env.REACT_APP_NODE_ENV === "development" ? "http://localhost:3000/api" : "https://musicappsamplebackend.onrender.com/api",
});
