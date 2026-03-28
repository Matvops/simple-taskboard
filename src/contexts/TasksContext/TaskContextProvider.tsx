import React, { useState } from "react";
import { TaskContext } from ".";
import type { TasksType } from "../../types/TasksTypes";
import { initialState } from "./initialState";


type TaskContextProviderType = {
  children: React.ReactNode
};

export const TaskContextProvider = ({ children }: TaskContextProviderType) => {

  const [state, setState] = useState<TasksType>(initialState);

  const valueProvider = {
    state: state,
    setState: setState
  };

  return(
    <TaskContext.Provider value={valueProvider} >
      {children}
    </TaskContext.Provider>
  );
} 