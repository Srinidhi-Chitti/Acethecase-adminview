const express = require('express');
const router = express.Router();
const placementController = require('../controllers/placementController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// All roles can view placements
router.get('/', placementController.getAllPlacements);

// Only admin can create placements
router.post('/', auth, roleCheck('admin'), placementController.createPlacement);

module.exports = router;