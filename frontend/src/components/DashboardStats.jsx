import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardStats() {

    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        resolved: 0
    });

    const fetchStats = async () => {

        try {

            const response = await axios.get(
                'http://localhost:5000/api/complaints'
            );

            const complaints = response.data.data;

            const total = complaints.length;

            const pending = complaints.filter(
                (item) => item.status === "Pending"
            ).length;

            const resolved = complaints.filter(
                (item) => item.status === "Resolved"
            ).length;

            setStats({
                total,
                pending,
                resolved
            });

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchStats();

    }, []);

    return (

        <div className="stats-container">

            <div className="stats-card">
                <h3>Total Complaints</h3>
                <h1>{stats.total}</h1>
            </div>

            <div className="stats-card">
                <h3>Pending</h3>
                <h1>{stats.pending}</h1>
            </div>

            <div className="stats-card">
                <h3>Resolved</h3>
                <h1>{stats.resolved}</h1>
            </div>

        </div>

    );

}

export default DashboardStats;