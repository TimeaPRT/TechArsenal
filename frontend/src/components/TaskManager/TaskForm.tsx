import React, { useState, useEffect } from 'react';
import { Task } from './types';

// --- ICON COMPONENTS (Inline SVGs to avoid import issues) ---

// Plus Icon (Add)
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

// Pencil Icon (Edit)
const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 17.151m3.743-4.834L7.5 13.91l-2.684.97c-.364.132-.731-.05-.884-.416l-1.687-4.437a1.875 1.875 0 012.652-2.652l7.108 7.108l-2.652 2.652m2.652-2.652l2.652-2.652" />
    </svg>
);

// --- TYPES ---

// Structure for creating or updating a task (no ID or system-generated fields)
type TaskUpdates = Omit<Task, 'id' | 'completed' | 'createdAt'>;

// --- TASK FORM COMPONENT ---

interface TaskFormProps {
    darkMode: boolean;
    editingTask?: Task | null;
    onAddTask: (task: TaskUpdates) => void;
    onEditTask: (id: string, updates: TaskUpdates) => void;
    onCancelEdit: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ 
    darkMode, 
    editingTask,
    onAddTask, 
    onEditTask,
    onCancelEdit 
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Task['priority']>('medium');
    const [dueDate, setDueDate] = useState('');

    // Load data when editing or reset when exiting edit mode
    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || '');
            setPriority(editingTask.priority);
            // Format date for HTML input (YYYY-MM-DD)
            const formattedDate = editingTask.dueDate ? editingTask.dueDate.split('T')[0] : '';
            setDueDate(formattedDate);
        } else {
            setTitle('');
            setDescription('');
            setPriority('medium');
            setDueDate('');
        }
    }, [editingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        // Prepare task details
        const detailsToSubmit: TaskUpdates = {
            title: title.trim(),
            description: description.trim(),
            priority,
            dueDate: dueDate || undefined,
        };

        if (editingTask) {
            // Update existing task
            onEditTask(editingTask.id, detailsToSubmit);
            onCancelEdit();
        } else {
            // Add a new task
            onAddTask(detailsToSubmit);
            // Reset form
            setTitle('');
            setDescription('');
            setPriority('medium');
            setDueDate('');
        }
    };

    const isEditMode = Boolean(editingTask);
    
    // Dynamic color for priority indicator
    const priorityColor = (p: Task['priority']) => {
        switch(p) {
            case 'high': return 'text-red-500';
            case 'medium': return 'text-yellow-500';
            case 'low': return 'text-green-500';
            default: return 'text-gray-500';
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`mb-10 shadow-2xl overflow-hidden rounded-2xl ${
                darkMode
                    ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/50'
                    : 'bg-white/90 backdrop-blur-sm border-0'
            }`}
        >
            <div className={`absolute inset-0 ${
                darkMode
                    ? 'bg-gradient-to-r from-blue-700/5 to-purple-700/5'
                    : 'bg-gradient-to-r from-blue-600/5 to-purple-600/5'
            }`}></div>
            <div className="relative p-6">
                <h2 className={`text-2xl flex items-center gap-3 font-bold mb-6 ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        darkMode
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                        {isEditMode ? (
                            <PencilIcon className="h-4 w-4 text-white" />
                        ) : (
                            <PlusIcon className="h-4 w-4 text-white" />
                        )}
                    </div>
                    {isEditMode ? 'Edit Task' : 'Create New Task'}
                </h2>
                <div className="relative space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <input
                                placeholder="What needs to be done?"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                                className={`w-full h-12 text-lg rounded-lg px-4 focus:outline-none focus:ring-2 ${
                                    darkMode
                                        ? 'bg-gray-700/50 border-gray-600 focus:ring-blue-500/30 focus:border-blue-500 text-gray-200'
                                        : 'bg-white/70 border-gray-200 focus:ring-blue-400/20 focus:border-blue-400 text-gray-800'
                                }`}
                                onKeyPress={e => e.key === 'Enter' && handleSubmit(e as any)}
                            />
                        </div>
                        <div>
                            <select
                                value={priority}
                                onChange={e => setPriority(e.target.value as Task['priority'])}
                                className={`w-full h-12 px-4 text-lg rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer ${
                                    darkMode
                                        ? 'bg-gray-700/50 border-gray-600 focus:ring-blue-500/30 focus:border-blue-500 text-gray-200'
                                        : 'bg-white/70 border-gray-200 focus:ring-blue-400/20 focus:border-blue-400 text-gray-800'
                                } ${priorityColor(priority)}`}
                            >
                                <option value="low">🟢 Low Priority</option>
                                <option value="medium">🟡 Medium Priority</option>
                                <option value="high">🔴 High Priority</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="Add a description (optional)..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className={`w-full h-12 text-lg rounded-lg px-4 focus:outline-none focus:ring-2 ${
                                darkMode
                                    ? 'bg-gray-700/50 border-gray-600 focus:ring-blue-500/30 focus:border-blue-500 text-gray-200'
                                    : 'bg-white/70 border-gray-200 focus:ring-blue-400/20 focus:border-blue-400 text-gray-800'
                            }`}
                        />
                        <input
                            type="date"
                            value={dueDate}
                            onChange={e => setDueDate(e.target.value)}
                            className={`w-full h-12 text-lg rounded-lg px-4 focus:outline-none focus:ring-2 cursor-pointer ${
                                darkMode
                                    ? 'bg-gray-700/50 border-gray-600 focus:ring-blue-500/30 focus:border-blue-500 text-gray-200'
                                    : 'bg-white/70 border-gray-200 focus:ring-blue-400/20 focus:border-blue-400 text-gray-800'
                            }`}
                        />
                    </div>
                    <div className="flex gap-3">
                        {isEditMode && onCancelEdit && (
                            <button
                                type="button"
                                onClick={onCancelEdit}
                                className={`flex-1 h-12 text-lg rounded-lg transition-all duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                }`}
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            type="submit"
                            disabled={!title.trim()}
                            className={`${isEditMode ? 'flex-1' : 'w-full'} h-12 text-lg text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg
                                ${!title.trim()
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : darkMode
                                        ? 'bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 hover:scale-[1.02]'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02]'}
                                flex items-center justify-center`}
                        >
                            {isEditMode ? (
                                <PencilIcon className="h-5 w-5 mr-2" />
                            ) : (
                                <PlusIcon className="h-5 w-5 mr-2" />
                            )}
                            {isEditMode ? 'Update Task' : 'Add Task'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
