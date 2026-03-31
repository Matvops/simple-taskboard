export type TaskType = {
    name: string | null,
    priority: 'lowPriority' | 'mediumPriority' | 'highPriority',
    stage: 'toDo' | 'blocked' | 'working' | 'done'
    createdAt: number
}