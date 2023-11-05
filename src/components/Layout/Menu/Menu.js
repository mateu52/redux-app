import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    )
}