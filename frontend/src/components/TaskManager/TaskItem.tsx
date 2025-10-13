import React from 'react';
import { Task } from './types';
import { TrashIcon, PencilIcon } from './icons';

interface TaskItemProps {
    task: Task;
    darkMode: boolean;
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
    setEditingTask: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ 
    task, 
    darkMode, 
    toggleComplete, 
    deleteTask, 
    setEditingTask 
}) => {
    
    // Class for priority styling with proper typing and fallback
    const priorityClassMap: Record<string, string> = {
        low: 'bg-green-500/10 text-green-500 border-green-500/30',
        medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
        high: 'bg-red-500/10 text-red-500 border-red-500/30',
    };

    // Safe priority handling with fallback to 'medium'
    const priority = task.priority || 'medium';
    const priorityClass = priorityClassMap[priority] || priorityClassMap.medium;

    // Safe priority display text
    const priorityText = priority.charAt(0).toUpperCase() + priority.slice(1) + ' Priority';

    return (
        <div 
            className={`flex items-center justify-between p-4 border-b transition-colors duration-200 ${
                darkMode 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-200 hover:bg-gray-100'
            } ${task.completed ? 'opacity-50 line-through' : ''}`}
        >
            <div className="flex items-start flex-grow">
                {/* Completion checkbox */}
                <input
                    type="checkbox"
                    checked={task.completed || false}
                    onChange={() => toggleComplete(task.id)}
                    className={`w-5 h-5 mt-1 cursor-pointer rounded ${
                        darkMode ? 'bg-gray-600 border-gray-500 text-purple-400' : 'text-blue-600 border-gray-300'
                    }`}
                />
                
                <div className="ml-4">
                    {/* Title */}
                    <p className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {task.title || 'Untitled Task'}
                    </p>
                    
                    {/* Description */}
                    {task.description && (
                        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {task.description}
                        </p>
                    )}

                    {/* Priority and Date */}
                    <div className="flex flex-wrap gap-2 mt-2 text-xs">
                        <span className={`px-2 py-0.5 rounded-full border ${priorityClass}`}>
                            {priorityText}
                        </span>
                        {task.dueDate && (
                            <span className={`px-2 py-0.5 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2 ml-4">
                <button
                    onClick={() => setEditingTask(task)}
                    className={`p-2 rounded-full transition-colors ${
                        darkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-200'
                    }`}
                    title="Edit Task"
                >
                    <PencilIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className={`p-2 rounded-full transition-colors ${
                        darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-gray-200'
                    }`}
                    title="Delete Task"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};