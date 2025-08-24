import axios from "axios";
const BASE_URL = "https://pb.devpgs.app";

// Login API
export const login = (email, password) =>
  axios.post(`${BASE_URL}/api/collections/users/auth-with-password`, {
    identity: email,
    password
  });

// Register API
export const register = (email, password) =>
  axios.post(`${BASE_URL}/api/collections/users/records`, {
    email,
    password,
    passwordConfirm: password
  });
