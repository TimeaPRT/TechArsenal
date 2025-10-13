import React, { useEffect, useState } from 'react';
import { Task } from './types';
import { CheckCircleIcon, ClockIcon, AlertTriangleIcon, TrendingUpIcon } from './icons';

interface TaskStatsProps {
  tasks: Task[];
  darkMode: boolean;
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks, darkMode }) => {
  const [animatedValues, setAnimatedValues] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0,
    progressPercentage: 0
  });

  useEffect(() => {
    const stats = {
      total: tasks.length,
      completed: tasks.filter(t => t.completed).length,
      overdue: tasks.filter(t => t.dueDate && new Date(t.dueDate) < new Date() && !t.completed).length,
    };

    const pendingCount = stats.total - stats.completed - stats.overdue;
    const progressPercentage = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

    const duration = 500;
    const steps = 30;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const startValues = { ...animatedValues }; // animate from current values
    const endValues = {
      total: stats.total,
      completed: stats.completed,
      pending: pendingCount,
      overdue: stats.overdue,
      progressPercentage,
    };

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues({
        total: Math.round(startValues.total + (endValues.total - startValues.total) * progress),
        completed: Math.round(startValues.completed + (endValues.completed - startValues.completed) * progress),
        pending: Math.round(startValues.pending + (endValues.pending - startValues.pending) * progress),
        overdue: Math.round(startValues.overdue + (endValues.overdue - startValues.overdue) * progress),
        progressPercentage: startValues.progressPercentage + (endValues.progressPercentage - startValues.progressPercentage) * progress,
      });

      if (currentStep >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [tasks, darkMode]); // <-- recalc whenever tasks change

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
    gradient
  }: {
    title: string;
    value: number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    gradient: string;
  }) => (
    <div className={`
      relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105
      ${darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'}
      border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      shadow-lg hover:shadow-xl
    `}>
      <div className={`absolute inset-0 rounded-2xl opacity-10 ${gradient}`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <Icon className={`w-8 h-8 ${color}`} />
          <div className={`text-2xl font-bold ${color}`}>{value}</div>
        </div>
        <h3 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h3>
        <div className={`w-12 h-1 mt-2 rounded-full ${gradient}`} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <StatCard
          title="Total Tasks"
          value={animatedValues.total}
          icon={TrendingUpIcon}
          color={darkMode ? 'text-blue-400' : 'text-blue-600'}
          gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Completed"
          value={animatedValues.completed}
          icon={CheckCircleIcon}
          color={darkMode ? 'text-green-400' : 'text-green-600'}
          gradient="bg-gradient-to-r from-green-500 to-emerald-500"
        />
        <StatCard
          title="Pending"
          value={animatedValues.pending}
          icon={ClockIcon}
          color={darkMode ? 'text-yellow-400' : 'text-yellow-600'}
          gradient="bg-gradient-to-r from-yellow-500 to-amber-500"
        />
        <StatCard
          title="Overdue"
          value={animatedValues.overdue}
          icon={AlertTriangleIcon}
          color={darkMode ? 'text-red-400' : 'text-red-600'}
          gradient="bg-gradient-to-r from-red-500 to-pink-500"
        />
      </div>

      <div className="relative w-72 h-72 flex items-center justify-center">
        <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}></div>
        <div className={`relative w-64 h-64 rounded-full backdrop-blur-sm border shadow-2xl ${darkMode ? 'bg-gray-800/40 border-gray-700/30' : 'bg-white/40 border-white/30'}`}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke={darkMode ? "rgba(55,65,81,0.1)" : "rgba(229,231,235,0.3)"} strokeWidth="0.5" strokeDasharray="2 2"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke={darkMode ? "rgba(55,65,81,0.2)" : "rgba(229,231,235,0.4)"} strokeWidth="8"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke={darkMode ? "rgba(55,65,81,0.3)" : "rgba(209,213,219,0.4)"} strokeWidth="8" strokeDasharray="239" strokeDashoffset="0"/>
            <circle cx="50" cy="50" r="38" fill="none" strokeLinecap="round" stroke={darkMode ? "url(#enhanced-progress-gradient-dark)" : "url(#enhanced-progress-gradient-light)"} strokeWidth="8" strokeDasharray="239" strokeDashoffset={239 * (1 - animatedValues.progressPercentage / 100)} transform="rotate(-90 50 50)" style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)', filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.5))'}}/>
            <defs>
              <linearGradient id="enhanced-progress-gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="enhanced-progress-gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <radialGradient id="center-glow-light" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.1)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </radialGradient>
              <radialGradient id="center-glow-dark" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(96,165,250,0.1)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0)" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="25" fill={darkMode ? "url(#center-glow-dark)" : "url(#center-glow-light)"} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`text-4xl font-bold mb-1 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-blue-300 to-purple-300' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
              {Math.round(animatedValues.progressPercentage)}%
            </div>
            <div className={`text-xs font-medium tracking-widest uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Completion Rate
            </div>
            {animatedValues.progressPercentage === 100 && (
              <div className={`mt-2 px-3 py-1 rounded-full text-xs font-medium animate-bounce ${darkMode ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-700/50' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'}`}>
                🎉 All Done!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
