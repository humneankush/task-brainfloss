import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard: React.FC = () => {
    return (
        <div className="user-dashboard">
            <h2>User Dashboard</h2>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="invoices">Invoices</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="users">Users</Link>
                    </li>
                </ul>
            </nav>
            <div className="content mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default UserDashboard;
