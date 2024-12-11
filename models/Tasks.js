
import mongoose from 'mongoose';

const taskModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,  
  }
);

const TaskSchema = mongoose.model('TaskSchema', taskModelSchema);
export default TaskSchema;
