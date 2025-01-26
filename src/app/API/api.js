import axios from "axios";
export const signUP = async (data) => {
  return axios.post(`http://localhost:8080/api/users/register`, data);
};

export const loginUser = async (data) => {
  return axios.post(`http://localhost:8080/api/users/login`, data);
};
