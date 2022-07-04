import { useMutation, useQuery, useQueryClient } from "react-query";
import { createUser, getUserById, getUsers, getR } from "../api/users";

const key = "users";

const r = "user";

export const useMutateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: (user) => {
      queryClient.setQueryData([key], (prevUser) => prevUser.concat(user));
      queryClient.invalidateQueries([key]);
    },
  });
};

export const useUsers = () => useQuery([key], getUsers);

export const useUser = (id) => useQuery([key, id], () => getUserById(id));

export const useR = () => useQuery([r], getR);
