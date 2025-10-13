// backend/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import individual functions directly
import { getTasks, createTask, updateTask, deleteTask } from './controllers/task.controller.ts';


// 1. Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// --- CORS CONFIGURATION ---
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};

// --- ESSENTIAL MIDDLEWARE ---
app.use(cors(corsOptions));
app.use(express.json());

// --- ROUTES DEFINITION ---
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Manager API is running!' });
});

// Main Task Manager Routes
app.get('/api/tasks', getTasks);          // [R] Get all tasks
app.post('/api/tasks', createTask);      // [C] Create a new task
app.patch('/api/tasks/:id', updateTask); // [U] Update a specific task
app.delete('/api/tasks/:id', deleteTask); // [D] Delete a task

// Start the server
app.listen(port, () => {
  console.log(`🚀 Task Manager API running on http://localhost:${port}`);
});