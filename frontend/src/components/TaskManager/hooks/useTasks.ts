// frontend/src/components/TaskManager/hooks/useTasks.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types';

const API_URL = 'http://localhost:4000/api/tasks';

// Shape of a new task coming from the form
type NewTaskDetails = Omit<Task, 'id' | 'completed' | 'createdAt'>;

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks from API
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Task[]>(API_URL);
      setTasks(response.data);
      localStorage.setItem('tasks', JSON.stringify(response.data));
      setError(null);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to load tasks, using local storage.');
      const saved = localStorage.getItem('tasks');
      if (saved) setTasks(JSON.parse(saved));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // --- CRUD Operations ---

  // Create
  const addTask = async (taskDetails: NewTaskDetails) => {
    const newTask: Task = {
      ...taskDetails,
      id: uuidv4(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks(prev => [...prev, newTask]);

    try {
      await axios.post<Task>(API_URL, newTask);
    } catch (err) {
      console.error('Failed to add task to server:', err);
    }
  };

  // Update (edit)
  const editTask = async (id: string, updates: Partial<Task>) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, ...updates } : task))
    );

    try {
      await axios.patch(`${API_URL}/${id}`, updates);
    } catch (err) {
      console.error('Failed to update task on server:', err);
    }
  };

  // Toggle completion
  const toggleComplete = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const updated = { completed: !task.completed };
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    try {
      await axios.patch(`${API_URL}/${id}`, updated);
    } catch (err) {
      console.error('Failed to toggle completion on server:', err);
    }
  };

  // Delete
  const deleteTask = async (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));

    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
      console.error('Failed to delete task from server:', err);
    }
  };

  // Stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.filter(t => !t.completed).length;
  const overdueTasks = tasks.filter(
    t => t.dueDate && new Date(t.dueDate) < new Date() && !t.completed
  ).length;

  return {
    tasks,
    isLoading,
    error,
    addTask,
    editTask,
    toggleComplete,
    deleteTask,
    totalTasks,
    completedTasks,
    pendingTasks,
    overdueTasks,
    refreshTasks: fetchTasks, // Optional: force reload from server
  };
};
