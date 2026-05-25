import { useState } from 'react';
import axios from 'axios';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
                'http://localhost:5000/api/auth/login',
                formData
            );

            localStorage.setItem(
                'token',
                response.data.token
            );

            alert("Login Successful");

            console.log(response.data);

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");

        }

    };

    return (

        <div className="form-container">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;