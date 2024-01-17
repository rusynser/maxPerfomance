// routes/taskRoutes.js
import express from 'express';
import TaskDao from '../dao/taskDao.js';

const router = express.Router();

router.post('/create-task/:projectId', async (req, res) => {
  try {
    const { taskName, solver, complexity, description, state, priority, comment } = req.body;
    const projectId = req.params.projectId;

    if (!taskName || !solver || !complexity || !description || !state || !priority || !comment) {
      return res.status(400).json({ error: 'All task fields are required in the request body' });
    }

    const taskId = await TaskDao.createTask({ taskName, solver, complexity, description, state, priority, comment, projectId });

    res.status(201).json({ message: 'Task created successfully', taskId });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const tasks = await TaskDao.getTasksByProject(projectId);

    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other task-related routes here

export default router;
