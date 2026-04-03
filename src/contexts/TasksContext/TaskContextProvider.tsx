import React, { useEffect, useState } from "react";
import { TaskContext } from ".";
import type { TasksType } from "../../types/TasksTypes";
import { initialState } from "./initialState";


type TaskContextProviderType = {
  children: React.ReactNode
};

export const TaskContextProvider = ({ children }: TaskContextProviderType) => {

  const [state, setState] = useState<TasksType>(() => {

    const tasksSessionStorage = sessionStorage.getItem('tasks');

    let retorno: TasksType = initialState;

    if(tasksSessionStorage) {
      retorno = {
        tasks: JSON.parse(tasksSessionStorage)
      }
    } 

    return retorno;
  });

  const valueProvider = {
    state: state,
    setState: setState
  };

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state]);

  return(
    <TaskContext.Provider value={valueProvider} >
      {children}
    </TaskContext.Provider>
  );
} 