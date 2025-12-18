const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    applicationLink: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'closed'],
        default: 'active'
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Placement', placementSchema);