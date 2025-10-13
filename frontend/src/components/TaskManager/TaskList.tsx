import React, { useState } from 'react';
import { Task } from './types'; 
import { TaskCard } from './TaskCard';

interface TaskListProps {
    tasks: Task[];
    darkMode: boolean;
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, updates: Partial<Task>) => void;
    setEditingTask: (task: Task) => void;
    reorderTasks?: (tasks: Task[]) => void; // optional
}

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    darkMode,
    toggleComplete,
    deleteTask,
    editTask,
    setEditingTask,
    reorderTasks,
}) => {
    // Optional drag-and-drop state
    const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
    const [dragOverTaskId, setDragOverTaskId] = useState<string | null>(null);

    const handleDragStart = (id: string) => setDraggedTaskId(id);
    const handleDragOver = (id: string) => {
        if (draggedTaskId !== id) setDragOverTaskId(id);
    };
    const handleDragLeave = () => setDragOverTaskId(null);
    const handleDrop = (id: string) => {
        if (!draggedTaskId) return;
        const newTasks = [...tasks];
        const fromIndex = newTasks.findIndex(t => t.id === draggedTaskId);
        const toIndex = newTasks.findIndex(t => t.id === id);
        const [moved] = newTasks.splice(fromIndex, 1);
        newTasks.splice(toIndex, 0, moved);
        reorderTasks?.(newTasks);
        setDraggedTaskId(null);
        setDragOverTaskId(null);
    };
    const handleDragEnd = () => {
        setDraggedTaskId(null);
        setDragOverTaskId(null);
    };

    if (tasks.length === 0) {
        return (
            <div className={`p-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                No tasks found. Start by creating a new one!
            </div>
        );
    }

    return (
        <div className="divide-y">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    darkMode={darkMode}
                    onToggleComplete={toggleComplete}
                    onDeleteTask={deleteTask}
                    onEditTask={(task: Task) => setEditingTask(task)}
                    draggedTaskId={draggedTaskId}
                    dragOverTaskId={dragOverTaskId}
                    onDragStart={() => handleDragStart(task.id)}
                    onDragOver={() => handleDragOver(task.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={() => handleDrop(task.id)}
                    onDragEnd={handleDragEnd}
                />
            ))}
        </div>
    );
};
