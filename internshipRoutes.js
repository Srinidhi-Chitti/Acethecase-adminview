const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// All roles can view internships
router.get('/', auth, internshipController.getAllInternships);

// Faculty can create internships
router.post('/', auth, roleCheck('faculty', 'admin'), internshipController.createInternship);

// Admin can update internship status
router.patch('/:id/status', auth, roleCheck('admin'), internshipController.updateInternshipStatus);

module.exports = router;