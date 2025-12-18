const Internship = require('../models/Internship');

// Create internship (Faculty only)
exports.createInternship = async (req, res) => {
    try {
        const internship = new Internship({
            ...req.body,
            postedBy: req.user._id,
            status: req.user.role === 'admin' ? 'approved' : 'pending'
        });

        await internship.save();

        res.status(201).json({
            success: true,
            message: req.user.role === 'admin' 
                ? 'Internship posted successfully' 
                : 'Internship submitted for approval',
            internship
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Get all internships (with filtering)
exports.getAllInternships = async (req, res) => {
    try {
        const { type, department, status } = req.query;
        let filter = {};

        // Students can only see approved internships
        if (req.user.role === 'student') {
            filter.status = 'approved';
        }

        // Faculty can see their own pending internships
        if (req.user.role === 'faculty') {
            filter.$or = [
                { status: 'approved' },
                { postedBy: req.user._id }
            ];
        }

        // Admin can see all
        if (req.user.role === 'admin') {
            // Admin sees all
        }

        if (type) filter.type = type;
        if (department) filter.department = department;
        if (status && req.user.role !== 'student') filter.status = status;

        const internships = await Internship.find(filter)
            .populate('postedBy', 'name email')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: internships.length,
            internships
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Update internship status (Admin only)
exports.updateInternshipStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const internship = await Internship.findById(req.params.id);

        if (!internship) {
            return res.status(404).json({ 
                success: false, 
                message: 'Internship not found' 
            });
        }

        internship.status = status;
        await internship.save();

        res.json({
            success: true,
            message: `Internship ${status} successfully`,
            internship
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
};