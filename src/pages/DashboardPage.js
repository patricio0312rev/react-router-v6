import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'

export default function DashboardPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <Outlet />

            <button onClick={handleClick}>Logout</button>

            <br/>
            <Link to='welcome'>Say welcome</Link>
            <br/>
            <Link to='goodbye'>Say goodbye</Link>
                
        </div>
    )
}
