import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/graphql",
  headers: {
    "Content-Type": "application/json",
  },
});
