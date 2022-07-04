import axios from "axios";

const URL = "http://localhost:3005";

export const getUserById = async (id) => {
  const { data } = await axios.get(`${URL}/users/${id}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${URL}/users`);
  return data;
};

export const createUser = async (user) => {
  const { data } = await axios.post(`${URL}/users`, user);
  return data;
};

export const getR = async () => {
  const { data } = await axios.get(`${URL}/user`);
  return data;
};
