const express = require('express');

const router = express.Router();

const {
    createComplaint,
    getComplaints,
    getComplaintById,
    updateComplaintStatus,
    deleteComplaint
} = require('../controllers/complaintController');


// CREATE COMPLAINT
router.post('/', createComplaint);


// GET ALL COMPLAINTS
router.get('/', getComplaints);

router.get('/:id', getComplaintById);

router.put('/:id', updateComplaintStatus);

router.delete('/:id', deleteComplaint);


module.exports = router;