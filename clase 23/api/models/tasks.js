import mongoose  from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assignedUser: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['to do', 'doing', 'blocked', 'done'],
    default: 'to do'
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projects',
    required: true
  }
});

export default mongoose.model('Tasks', TaskSchema);
