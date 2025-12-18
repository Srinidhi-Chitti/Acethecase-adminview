const Placement = require('../models/Placement');

// Get all placements
exports.getAllPlacements = async (req, res) => {
    try {
        const placements = await Placement.find({ status: 'active' })
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: placements.length,
            placements
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Create placement (Admin only)
exports.createPlacement = async (req, res) => {
    try {
        const placement = new Placement({
            ...req.body,
            postedBy: req.user._id
        });

        await placement.save();

        res.status(201).json({
            success: true,
            message: 'Placement opportunity added successfully',
            placement
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
};