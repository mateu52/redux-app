import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav className='bg-green-400'>
            <ul className='flex'>
                <li className='pt-1 pl-3'><Link to="/home">Home</Link></li>
                <li className='pt-1 pl-3'><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    )
}