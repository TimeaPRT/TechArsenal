'use client';

import { useState, useEffect } from 'react';
import { Task, TaskFilter as TaskFilterType } from './types';
import { useTasks } from './hooks/useTasks';
import { TaskForm } from './TaskForm';
import { TaskStats } from './TaskStats';
import TaskFilter from './TaskFilter';
import { MoonIcon, SunIcon } from './icons';
import { TaskList } from './TaskList';

export const TaskManager = () => {
  // --- Global State ---
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState<TaskFilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // --- Task State Management via Hook ---
  const {
    tasks,
    isLoading,
    addTask,
    editTask,
    deleteTask,
    toggleComplete,
    // reorderTasks removed because hook doesn't provide it
  } = useTasks();

  // Initialize dark mode from system preferences
  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handle task editing
  const handleEditTask = (id: string, updates: Partial<Task>) => {
    if (editingTask) {
      editTask(editingTask.id, updates);
      setEditingTask(null);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Filter tasks before passing to TaskList
  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;

    return true;
  });

  // --- Loading State ---
  if (!isMounted || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className={`text-xl font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading tasks from API...
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 p-2 rounded-full z-50 transition-colors ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300'
            : 'bg-gray-200 hover:bg-gray-300 text-blue-900'
        }`}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>

      <div className="mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-24">
          <div className="mb-10">
            <h1
              className={`text-5xl font-bold bg-clip-text text-transparent leading-normal pb-2 ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}
            >
              Task Manager
            </h1>
          </div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Organize your tasks efficiently
          </p>
        </header>

        {/* Stats */}
        <div className="mb-20">
          <TaskStats tasks={tasks} darkMode={darkMode} />
        </div>

        {/* Add Task Form */}
        <div className="mb-16">
          <TaskForm
            darkMode={darkMode}
            onAddTask={addTask}
            onEditTask={() => {}} // empty function since this is the add form
            onCancelEdit={() => {}}
          />
        </div>

        {/* Filter and Search */}
        <div className="mb-12">
          <TaskFilter
            darkMode={darkMode}
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            tasks={tasks}
          />
        </div>

        {/* Task List */}
        <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <TaskList
            tasks={filteredTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            setEditingTask={setEditingTask}
            darkMode={darkMode}
          />
        </div>

        {/* Edit Task Modal */}
        {editingTask && (
          <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-black/80' : 'bg-black/50'}`}>
            <div
              className={`relative w-full max-w-md rounded-xl shadow-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}
            >
              <div className="p-6">
                <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Edit Task
                </h2>

                {/* Edit Form */}
                <TaskForm
                  darkMode={darkMode}
                  editingTask={editingTask}
                  onAddTask={addTask}
                  onEditTask={handleEditTask}
                  onCancelEdit={handleCancelEdit}
                />

                {/* Close button */}
                <button
                  onClick={handleCancelEdit}
                  className={`mt-4 w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
