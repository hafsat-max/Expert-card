import axios from "axios";

const token = localStorage.getItem("my-user");
export const AUTHAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(token)?.token}`,
  },
});
