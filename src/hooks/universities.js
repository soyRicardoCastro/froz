import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUnis, createUni, getUniById } from "../api/universities";

const key = "universities";

export const useMutateUni = () => {
  const qC = useQueryClient();

  return useMutation(createUni, {
    onSuccess: (uni) => {
      qC.setQueryData([key], (prevUni) => prevUni.concat(uni));
      qC.invalidateQueries([key]);
    },
  });
};

export const useUnis = () => useQuery([key], getUnis);

export const useUni = (id) => useQuery([ket, id], () => getUniById(id));
