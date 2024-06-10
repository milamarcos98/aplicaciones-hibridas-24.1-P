import express from 'express';
const projectroutes = express.Router();
import Projects from '../models/projects.js';

projectroutes.get('/', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

projectroutes.post('/', async (req, res) => {
  console.log(req.body)
  const project = new Projects({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

projectroutes.get('/search', async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'Name query parameter is required' });
  }
  try {
    const projects = await Projects.find({ name: { $regex: name, $options: 'i' } });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

projectroutes.get('/:id', async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export {projectroutes};
