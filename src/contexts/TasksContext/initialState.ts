import type { TasksType } from "../../types/TasksTypes";
import type { TaskType } from "../../types/TaskType";

export const initialState: TasksType = {
   tasks: new Array<TaskType>()
}