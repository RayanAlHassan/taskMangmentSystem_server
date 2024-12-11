import express from 'express';
import { getTasks, addTask, updateTask, deleteTask } from './controller/Tasks.js'; 
const router = express.Router();

// GET /tasks
router.get('/tasks', getTasks);

// POST /tasks
router.post('/tasks', addTask);

// PUT /tasks/:id
router.put('/tasks/:id', updateTask);

// DELETE /tasks/:id
router.delete('/tasks/:id', deleteTask);

export default router;
