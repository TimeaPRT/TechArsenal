import React from 'react';
import { Task } from './types';
import { PencilIcon, TrashIcon, CheckIcon, CalendarIcon, DragHandleIcon, StarIcon, ClockIcon, CircleIcon } from './icons';

const priorityConfig = {
  low: {
    color: 'border-emerald-400 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
    icon: CircleIcon,
  },
  medium: {
    color: 'border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-900/20',
    icon: ClockIcon,
  },
  high: {
    color: 'border-rose-400 text-rose-600 bg-rose-50 dark:bg-rose-900/20',
    icon: StarIcon,
  },
};

interface TaskCardProps {
  task: Task;
  darkMode: boolean;
  draggedTaskId: string | null;
  dragOverTaskId: string | null;
  onToggleComplete: (id: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragOver: (id: string) => void;
  onDragLeave: () => void;
  onDrop: (id: string) => void;
  onDragEnd: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  darkMode,
  draggedTaskId,
  dragOverTaskId,
  onToggleComplete,
  onEditTask,
  onDeleteTask,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
}) => {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(task.id)}
      onDragOver={() => onDragOver(task.id)}
      onDragLeave={onDragLeave}
      onDrop={() => onDrop(task.id)}
      onDragEnd={onDragEnd}
      className={`relative transition-all duration-200 ${
        draggedTaskId === task.id ? 'opacity-50' : 'opacity-100'
      } ${
        dragOverTaskId === task.id
          ? darkMode
            ? 'border-l-4 border-purple-500'
            : 'border-l-4 border-blue-500'
          : ''
      }`}
    >
      <div className={`group rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/70 border border-gray-700/50 hover:border-gray-600'
          : 'bg-white/90 border-0 hover:border-gray-200'
      }`}>
        <div className="absolute inset-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="relative pl-6 pr-4 py-4">
          <div className={`absolute left-1 top-1/2 transform -translate-y-1/2 p-1 rounded-md cursor-move opacity-0 group-hover:opacity-100 transition-opacity ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
            <DragHandleIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>

          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onToggleComplete(task.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  task.completed
                    ? darkMode
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-emerald-500 text-white'
                    : darkMode
                      ? 'border-2 border-gray-500 hover:border-emerald-400'
                      : 'border-2 border-gray-300 hover:border-emerald-400'
                }`}
              >
                {task.completed && <CheckIcon className="h-4 w-4" />}
              </button>
              <h3 className={`text-lg font-medium ${
                task.completed
                  ? darkMode
                    ? 'line-through text-gray-500'
                    : 'line-through text-gray-400'
                  : darkMode
                    ? 'text-gray-200'
                    : 'text-gray-800'
              }`}>
                {task.title}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEditTask(task)}
                className={`p-1.5 rounded-lg transition-colors ${
                  darkMode
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-blue-400'
                    : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                }`}
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className={`p-1.5 rounded-lg transition-colors ${
                  darkMode
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-rose-400'
                    : 'hover:bg-gray-100 text-gray-500 hover:text-rose-600'
                }`}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {task.description && (
            <p className={`ml-9 mb-3 ${
              task.completed
                ? darkMode
                  ? 'line-through text-gray-500'
                  : 'line-through text-gray-400'
                : darkMode
                  ? 'text-gray-400'
                  : 'text-gray-600'
            }`}>
              {task.description}
            </p>
          )}

          <div className="ml-9 flex flex-wrap items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border ${
              priorityConfig[task.priority].color
            }`}>
              {React.createElement(priorityConfig[task.priority].icon, { className: 'h-3.5 w-3.5' })}
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </div>

            {task.dueDate && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
                new Date(task.dueDate) < new Date() && !task.completed
                  ? darkMode
                    ? 'bg-rose-900/30 text-rose-300 border border-rose-800/50'
                    : 'bg-rose-100 text-rose-700 border border-rose-200'
                  : darkMode
                    ? 'bg-gray-700/50 text-gray-300 border border-gray-600/50'
                    : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}>
                <CalendarIcon className="h-3.5 w-3.5" />
                {new Date(task.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
