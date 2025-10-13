import React from 'react';
import { Task, TaskFilter as TaskFilterType } from './types';

interface TaskFilterProps {
  darkMode: boolean;
  filter: TaskFilterType;
  setFilter: (filter: TaskFilterType) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  tasks: Task[];
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  darkMode,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  tasks
}) => {
  return (
    <div className="my-8">
      {/* Filtrare după status */}
      <div className="flex gap-4 flex-wrap mb-4">
        {['all', 'completed', 'incomplete'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as TaskFilterType)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === status
                ? darkMode
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-blue-500 text-white border-blue-500'
                : darkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Căutare */}
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className={`w-full h-10 px-4 rounded-lg border focus:outline-none ${
          darkMode
            ? 'bg-gray-700/50 border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500/30'
            : 'bg-white/70 border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400/20'
        }`}
      />
    </div>
  );
};

export default TaskFilter;
