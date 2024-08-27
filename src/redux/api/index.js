import axios from "axios";
const API = axios.create({
  baseURL: "https://kudosware-server.onrender.com/api/v1/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// USERS
export const fetchUser = () => API.get("/user");
export const fetchUserById = (id) => API.get(`/users/${id}`);
export const signUp = (newUser) => API.post("/users/signup/", newUser);
export const signIn = (newUser) => API.post("/users/signin/", newUser);
