import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    return (
        <div className="user-dashboard">
            <h2>Admin Dashboard</h2>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="admin-dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="user-management">User ManageMent</Link>
                    </li>
                </ul>
            </nav>
            <div className="content mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
