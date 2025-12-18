const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['on-campus', 'off-campus'],
        default: 'on-campus'
    },
    department: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skillsRequired: [{
        type: String
    }],
    duration: {
        type: String,
        required: true
    },
    stipend: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    applicationDeadline: {
        type: Date,
        required: true
    },
    eligibility: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Internship', internshipSchema);