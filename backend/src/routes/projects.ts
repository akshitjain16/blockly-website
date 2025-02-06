import express from 'express';
import Project from '../models/Project';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

// Create a new project
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { projectName, xml } = req.body;
    const userId = req.user.id;

    const project = new Project({ userId, projectName, xml });
    await project.save();

    res.status(201).json({ message: 'Project saved successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all projects for a user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const projects = await Project.find({ userId });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific project
router.get('/:projectId', authenticateToken, async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user.id;

    const project = await Project.findOne({ _id: projectId, userId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a project
router.put('/:projectId', authenticateToken, async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user.id;
    const { projectName, xml } = req.body;

    const project = await Project.findOneAndUpdate(
      { _id: projectId, userId },
      { projectName, xml, updatedAt: Date.now() },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a project
router.delete('/:projectId', authenticateToken, async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user.id;

    const project = await Project.findOneAndDelete({ _id: projectId, userId });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;