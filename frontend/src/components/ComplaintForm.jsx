import { useState } from 'react';
import axios from 'axios';

function ComplaintForm() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: ''
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                'http://localhost:5000/api/complaints',
                formData
            );

            alert("Complaint Submitted Successfully");

            console.log(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="form-container">

            <h2>Complaint Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="description"
                    placeholder="Enter Description"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Submit Complaint
                </button>

            </form>

        </div>

    );

}

export default ComplaintForm;