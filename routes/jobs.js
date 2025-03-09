const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const upload= require('../middleware/upload');
const router = express.Router();

// Create a job
router.post('/', auth, async (req, res) => {
    const { title, description, location, status } = req.body;
    try {
        const job = new Job({ title, description, location, status });
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all jobs
router.get('/', auth, async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Upload CV
router.post('/upload-cv', auth, upload.single('cv'), (req, res) => {
  try {
      // Check if file was uploaded
      if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
      }

      // Respond with file details
      res.json({
          message: 'File uploaded successfully',
          file: req.file,
      });
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;