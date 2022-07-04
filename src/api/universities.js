import axios from "./axios";

export const getUnis = async () => {
  const { data } = await axios.get("/universities");
  return data;
};

export const getUniById = async (id) => {
  const { data } = await axios.get(`/universities/${id}`);
  return data;
};

export const createUni = async (uni) => {
  const { data } = await axios.post("/universities", uni);
  return data;
};
