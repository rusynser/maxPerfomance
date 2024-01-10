// routes/taskRoutes.js
import express from 'express';
import ProjectDao from '../dao/projectDao.js';
import TaskDao from '../dao/taskDao.js';

const router = express.Router();

router.post('/create-task/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const { taskName, solver, complexity, description, state, priority, comment } = req.body;

    if (!projectId || !taskName || !solver || !complexity || !description || !state || !priority || !comment) {
      return res.status(400).json({ error: 'Incomplete task information in the request body' });
    }

    const taskId = await TaskDao.createTask(projectId, { taskName, solver, complexity, description, state, priority, comment });

    res.status(201).json({ message: 'Task created successfully', taskId });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/assign-responsible/:taskId/:freelancerId', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const freelancerId = req.params.freelancerId;

    if (!taskId || !freelancerId) {
      return res.status(400).json({ error: 'Incomplete information in the request parameters' });
    }

    await TaskDao.assignResponsible(taskId, freelancerId);

    res.status(200).json({ message: 'Responsible freelancer assigned successfully' });
  } catch (error) {
    console.error('Error assigning responsible freelancer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other task-related routes here

export default router;
