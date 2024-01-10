// routes/projectRoutes.js
import express from 'express';
import ProjectDao from '../dao/projectDao.js';

const router = express.Router();

router.post('/create-project', async (req, res) => {
  try {
    const { projectName, projectDescription } = req.body;

    if (!projectName || !projectDescription) {
      return res.status(400).json({ error: 'Project name and description are required in the request body' });
    }

    const projectId = await ProjectDao.createProject({ projectName, projectDescription });

    res.status(201).json({ message: 'Project created successfully', projectId });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/projects-by-customer/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const projects = await ProjectDao.getProjectsByCustomer(customerId);

    res.status(200).json({ projects });
  } catch (error) {
    console.error('Error retrieving projects by customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other project-related routes here

export default router;
