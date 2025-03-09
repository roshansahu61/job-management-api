const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: 'open' }, // open, closed, etc.
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);