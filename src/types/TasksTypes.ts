import type { Task } from "../interfaces/Task";
import type { Stage } from "./Stage";

export type TasksType = {
    tasks: Record<Stage, Task[]>,
    length: number
}