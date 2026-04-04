import type { TaskType } from "./TaskType";

export type TasksType = {
    tasks: {
        toDo: TaskType[],
        blocked: TaskType[],
        working: TaskType[],
        done: TaskType[],
    },
    length: number
}