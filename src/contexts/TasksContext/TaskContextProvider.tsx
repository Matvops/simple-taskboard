import React, { useEffect, useState } from "react";
import { TaskContext } from ".";
import type { TasksType } from "../../types/TasksTypes";
import { initialState } from "./initialState";
import type { Task } from "../../interfaces/Task";


type TaskContextProviderType = {
  children: React.ReactNode
};

export const TaskContextProvider = ({ children }: TaskContextProviderType) => {

  const [state, setState] = useState<TasksType>(() => {
    const tasksStorage = sessionStorage.getItem('tasks');
    
    let retorno: TasksType = initialState; 
    
    if(tasksStorage) {

      const tasks = JSON.parse(tasksStorage);

      const dateLimit = new Date();
      dateLimit.setDate(dateLimit.getDate() - 3);

      const doneFiltered = tasks.done?.filter((task: Task) => task.createdAt > dateLimit.getMilliseconds());
      const toDo = tasks.toDo;
      const blocked = tasks.blocked;
      const working = tasks.working;

      const tasksFiltered = {
        toDo: toDo,
        blocked: blocked,
        working: working,
        done: doneFiltered,
      }

      retorno = {
        tasks: tasksFiltered,
        length: toDo.length + blocked.length + working.length + doneFiltered.length
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