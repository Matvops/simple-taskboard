import React, { useEffect, useState } from "react";
import { TaskContext } from ".";
import type { TasksType } from "../../types/TasksTypes";
import { initialState } from "./initialState";


type TaskContextProviderType = {
  children: React.ReactNode
};

export const TaskContextProvider = ({ children }: TaskContextProviderType) => {

  const [state, setState] = useState<TasksType>(() => {
    const tasksStorage = sessionStorage.getItem('tasks');
    
    let retorno: TasksType = initialState; 
    
    if(tasksStorage) {

      const tasks = JSON.parse(tasksStorage);

      retorno = {
        tasks: tasks,
        length: tasks.blocked.length + tasks.done.length + tasks.toDo.length + tasks.working.length
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
    console.log(state)
  }, [state]);

  return(
    <TaskContext.Provider value={valueProvider} >
      {children}
    </TaskContext.Provider>
  );
} 