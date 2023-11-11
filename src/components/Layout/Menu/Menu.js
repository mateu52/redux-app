import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li className='pt-2 pl-3'><Link to="/home">Home</Link></li>
                <li className='pt-1 pl-3'><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    )
}