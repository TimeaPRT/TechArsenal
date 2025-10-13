// backend/services/task.service.ts
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt?: string;
}

export type NewTaskDetails = Omit<Task, 'id' | 'completed' | 'createdAt'> & Partial<Pick<Task, 'description' | 'completed'>>;

let tasks: Task[] = [
  { id: uuidv4(), title: 'Learn Node.js', description: 'Review async/await concepts.', completed: false, priority: 'medium', createdAt: new Date().toISOString() },
  { id: uuidv4(), title: 'Connect Frontend', description: 'Switch state from localStorage to API.', completed: true, priority: 'high', createdAt: new Date().toISOString() },
];

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const createTask = (taskDetails: NewTaskDetails): Task => {
    const newTask: Task = {
        id: uuidv4(), 
        title: taskDetails.title,
        description: taskDetails.description || '',
        priority: taskDetails.priority || 'medium',
        completed: taskDetails.completed || false,
        createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
};

export const updateTask = (id: string, updates: Partial<Omit<Task, 'id'>>): Task | null => {
  const index = tasks.findIndex(t => t.id === id);

  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      ...updates,
      id: tasks[index].id, 
    };
    return tasks[index]; 
  }
  return null; 
};

export const deleteTask = (id: string): boolean => {
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    return tasks.length < initialLength;
};

export default {
 getAllTasks,
 createTask, 
 updateTask,
 deleteTask, 
};