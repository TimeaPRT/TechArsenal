export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskFilter = 'all' | 'active' | 'completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate?: string;
  completed: boolean;
  createdAt: string;
}

// Task fields used for editing (exclude readonly/auto-generated fields)
export type TaskUpdates = Omit<Task, 'id' | 'completed' | 'createdAt'>;

// Task fields used for creating a new task
export type NewTaskDetails = Omit<Task, 'id' | 'completed' | 'createdAt'>;
