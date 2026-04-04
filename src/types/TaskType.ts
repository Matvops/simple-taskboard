export type TaskType = {
    id: number,
    name: string | null,
    priority: 'lowPriority' | 'mediumPriority' | 'highPriority',
    stage: 'toDo' | 'blocked' | 'working' | 'done'
    createdAt: number
}