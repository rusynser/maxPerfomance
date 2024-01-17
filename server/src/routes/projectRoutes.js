import express from 'express';
import ProjectDao from '../dao/projectDao.js';

const router = express.Router();

// Create a new project
router.post('/create-project', async (req, res) => {
  try {
    const { projectName, projectDescription } = req.body;

    if (!projectName || !projectDescription) {
      return res.status(400).json({ error: 'Project name and description are required in the request body' });
    }

    const newProject = { projectName, projectDescription };
    const projectId = await ProjectDao.createProject(newProject);

    res.status(201).json({ message: 'Project created successfully', projectId });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve all projects
router.get('/', async (req, res) => {
  try {
    const projects = await ProjectDao.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error retrieving projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve a specific project by ID
router.get('/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await ProjectDao.getProjectById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project); // Send project data as JSON
  } catch (error) {
    console.error('Error retrieving project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
