const Job = require('../models/Job');

// Create a job
exports.createJob = async (req, res) => {
    const { title, description, location, status } = req.body;
    try {
        const job = new Job({ title, description, location, status });
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all jobs
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};