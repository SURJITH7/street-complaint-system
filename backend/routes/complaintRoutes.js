const express = require('express');

const router = express.Router();

const protect = require('../middleware/authMiddleware');

const {
    createComplaint,
    getComplaints,
    getComplaintById,
    updateComplaintStatus,
    deleteComplaint
} = require('../controllers/complaintController');


// CREATE COMPLAINT
router.post('/create', protect, createComplaint);


// GET ALL COMPLAINTS
router.get('/', protect, getComplaints);

router.get('/:id', getComplaintById);

router.put('/:id', updateComplaintStatus);

router.delete('/:id', deleteComplaint);


module.exports = router;