// backend/controllers/task.controller.ts
import type { Request, Response } from 'express';
import taskService from '../services/task.service.ts'; 

export const getTasks = (req: Request, res: Response): void => {
    try {
        const tasks = taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error: any) {
        console.error('Error fetching tasks:', error.message);
        res.status(500).json({ error: 'Internal Server Error.' });
    }
};

export const createTask = (req: Request, res: Response): void => {
    try {
        const newTaskDetails = req.body; 
        const createdTask = taskService.createTask(newTaskDetails);
        res.status(201).json(createdTask);
    } catch (error: any) {
        console.error('Error creating task:', error.message);
        res.status(500).json({ error: 'Internal Server Error during creation.' });
    }
};

export const updateTask = (req: Request, res: Response): void => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedTask = taskService.updateTask(id, updates);

        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found.' });
        }
    } catch (error: any) {
        console.error('Error updating task:', error.message);
        res.status(500).json({ error: 'Internal Server Error during update.' });
    }
};

export const deleteTask = (req: Request, res: Response): void => {
    try {
        const { id } = req.params;
        const success = taskService.deleteTask(id);

        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Task not found.' });
        }
    } catch (error: any) {
        console.error('Error deleting task:', error.message);
        res.status(500).json({ error: 'Internal Server Error during deletion.' });
    }
};

export default {
    getTasks,
    createTask, 
    updateTask,
    deleteTask, 
};