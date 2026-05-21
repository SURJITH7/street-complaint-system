const Complaint = require('../models/complaint');


// CREATE COMPLAINT
const createComplaint = async (req, res) => {

    try {

        const complaint = new Complaint(req.body);

        await complaint.save();

        res.status(201).json({
            success: true,
            message: "Complaint Created Successfully",
            data: complaint
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// GET ALL COMPLAINTS
const getComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.find();

        res.status(200).json({
            success: true,
            count: complaints.length,
            data: complaints
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const updateComplaintStatus = async (req, res) => {

    try {

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: updatedComplaint
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// DELETE COMPLAINT
const deleteComplaint = async (req, res) => {

    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Complaint Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// GET SINGLE COMPLAINT
const getComplaintById = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: complaint
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createComplaint,
    getComplaints,
    getComplaintById,
    updateComplaintStatus,
    deleteComplaint
};