import type { TasksType } from "../../types/TasksTypes";

export const initialState: TasksType = {
   tasks: {
      toDo: [],
      blocked: [],
      working: [],
      done: [],
   },
   length: 0
}