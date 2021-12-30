import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleClick}>
                Logout
            </button>
        </div>
    )
}
