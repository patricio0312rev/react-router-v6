import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
            </ul>
        </div>
    )
}
