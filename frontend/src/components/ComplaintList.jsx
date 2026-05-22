import { useEffect, useState } from 'react';
import axios from 'axios';

function ComplaintList() {

    const [complaints, setComplaints] = useState([]);

    const [search, setSearch] = useState('');

    const [statusFilter, setStatusFilter] = useState('All');

    const fetchComplaints = async () => {

        try {

            const response = await axios.get(
                'http://localhost:5000/api/complaints'
            );

            setComplaints(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchComplaints();

    }, []);

    const deleteComplaint = async (id) => {

    try {

        await axios.delete(
            `http://localhost:5000/api/complaints/${id}`
        );

        alert("Complaint Deleted Successfully");

        fetchComplaints();

    } catch (error) {

        console.log(error);

    }

    };


    const updateStatus = async (id) => {

    try {

        await axios.put(
            `http://localhost:5000/api/complaints/${id}`,
            {
                status: "Resolved"
            }
        );

        alert("Complaint Resolved");

        fetchComplaints();

    } catch (error) {

        console.log(error);

    }

    };

    const filteredComplaints = complaints.filter((complaint) => {

    const matchesSearch =
        complaint.title.toLowerCase().includes(search.toLowerCase()) ||
        complaint.category.toLowerCase().includes(search.toLowerCase()) ||
        complaint.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
        statusFilter === 'All'
            ? true
            : complaint.status === statusFilter;

    return matchesSearch && matchesStatus;

    });


    return (

        <div>

            <h2>All Complaints</h2>

            <input
                type="text"
                placeholder="Search complaints..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >

                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>

            </select>

            
            {
                filteredComplaints.map((complaint) => (

                    <div
                        key={complaint._id}
                        className="complaint-card"
                    >

                        <h3>{complaint.title}</h3>

                        <p>{complaint.description}</p>

                        <p>
                            <strong>Category:</strong> {complaint.category}
                        </p>

                        <p>
                            <strong>Location:</strong> {complaint.location}
                        </p>

                        <p>
                            <strong>Status:</strong>

                            <span
                                style={{
                                    color:
                                        complaint.status === "Resolved"
                                            ? "green"
                                            : "red",
                                    fontWeight: "bold",
                                    marginLeft: "5px"
                                }}
                            >
                                {complaint.status}
                            </span>
                        </p>

                        <button
                            onClick={() => deleteComplaint(complaint._id)}
                    >
                              Delete
                        </button>

                        <button
                            onClick={() => updateStatus(complaint._id)}
                        >
                            Mark as Resolved
                        </button>

                    </div>

                ))
            }

        </div>

    );

}

export default ComplaintList;