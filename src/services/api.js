import axios from "axios";

export const api = axios.create({
  baseURL: "https://blog-api-mongodb.vercel.app",
});

export const createSession = async (email, password) => {
  return api.post("/authenticate", { email, password });
};

export const getPosts = async () => {
  return api.get("/getPosts");
};
