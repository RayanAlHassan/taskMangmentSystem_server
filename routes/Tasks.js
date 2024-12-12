import express from 'express';
import { getAllTasks, addTask, updateTask, deleteTask } from '../controller/Tasks.js'; 
const router = express.Router();

// GET /
router.get('/', getAllTasks);

// POST /tasks
router.post('/', addTask);

// PUT /:id
router.put('/:id', updateTask);

// DELETE /:id
router.delete('/:id', deleteTask);

export default router;
