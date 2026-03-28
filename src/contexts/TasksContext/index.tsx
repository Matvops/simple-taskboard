import { createContext } from "react";
import type { TasksType } from "../../types/TasksTypes";
import { initialState } from "./initialState";

type TaskContextType = {
    state: TasksType,
    setState: React.Dispatch<React.SetStateAction<TasksType>>
};

const taskContextValue = {
    state: initialState,
    setState: () => {}
};

export const TaskContext = createContext<TaskContextType>(taskContextValue);