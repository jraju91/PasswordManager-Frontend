import Axios from "axios";

// const API = Axios.create({ baseURL: "http://localhost:3001" });
const API = Axios.create({ baseURL: "https://passwordappjr.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getpasswords = async (userId) =>
  await API.get(`/password?userId=${userId}`);

export const getpassword = (id) => API.get(`/password/${id}`);

export const createpassword = async (createPassword) => {
  console.log(createPassword);
  await API.post("/password", createPassword);
};

export const updatepassword = (updatedPassword) => {
  console.log(updatedPassword);

  return API.put(`/password/${updatedPassword._id}`, updatedPassword);
};

export const deletepassword = (id) => API.delete(`/password/${id}`);

export const signIn = (formData) => {
  console.log(formData);

  return API.post("/auth/signin", formData);
};

export const signUp = async (formData) => {
  await API.post("/auth/signup", formData, {
    headers: { "Content-Type": "application/json" },
  });
};
