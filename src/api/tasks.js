import axios from "axios";

const URL = "http://localhost:3005";

export const getTasks = async () => {
  const { data } = axios.get("http://localhost:3005/users");
  return data;
};

export const getTask = async (id) => {
  const { data } = axios.get(`${URL}/tasks/${id}`);
  return data;
};
