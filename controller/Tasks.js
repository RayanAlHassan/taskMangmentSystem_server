
import TaskSchema from '../models/Task.js';

// Get all Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find().sort({ createdAt: -1 });
    res.status(200).json(tasks); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Add a Task
export const addTask = async (req, res) => {
    const { title, description } = req.body;
  
    try {
      // Check for required fields
      if (!title || !description) {
        return res.status(400).send("Title and description are required!");
      }
  
      // Create a new task
      const newTask = await Task.create({
        title,
        description,
        completed: false,  
      });
  
      // Return the newly created task
      return res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
// Update task status

export const updateTask = async (req, res) => {
    const { id } = req.params; 
    const { title, description, completed } = req.body; 
  
    try {
      const task = await TaskSchema.findById(id);
  
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      // Update task fields if provided
      if (title) task.title = title;
      if (description) task.description = description;
  
      // If the "completed" status is provided, toggle or update the task's completed status
      if (completed !== undefined) {
        task.completed = completed; // Set to true/false as per user's request
      }
  
      // Save the updated task
      const updatedTask = await task.save();
  
      // Respond with the updated task
      return res.status(200).json(updatedTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await TaskSchema.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
