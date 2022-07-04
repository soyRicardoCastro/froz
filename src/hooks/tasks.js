import { useQuery } from "react-query";
import { getTasks, getTask } from "../api/tasks";

const key = "tasks";

export const useTasks = () => useQuery([key], getTasks);

export const useTask = (id) => useQuery([key], getTask(id));
