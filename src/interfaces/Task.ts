import type { Priority } from "../types/Priority"
import type { Stage } from "../types/Stage"

export interface Task {
    id: number,
    name: string,
    priority: Priority,
    stage: Stage,
    createdAt: number
}