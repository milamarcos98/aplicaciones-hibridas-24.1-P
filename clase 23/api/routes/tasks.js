import express from 'express';
const taskroutes = express.Router();
import tasks from '../models/tasks.js';


taskroutes.get('/', async (req, res) => {
  // const { name, status, sortBy, page = 1, limit = 10 } = req.query;

  // const query = {};
  // if (name) query.name = { $regex: name, $options: 'i' };
  // if (status) query.status = status;

  try {
    const gettasks = tasks.find()
      // .sort(sortBy ? { [sortBy]: 1 } : {})
      // .skip((page - 1) * limit)
      // .limit(parseInt(limit));
    res.json(gettasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

taskroutes.post('/', async (req, res) => {
  const task = new tasks({
    name: req.body.name,
    description: req.body.description,
    assignedUser: req.body.assignedUser,
    status: req.body.status,
    projectId: req.body.projectId
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

taskroutes.get('/:id', async (req, res) => {
  try {
    const task = await tasks.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
export  {taskroutes};
