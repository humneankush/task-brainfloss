import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const User: React.FC = () => {
    // Sample data for sales graph
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [2000, 3000, 1500, 4000, 2500],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Sample notifications
    const notifications = [
        "Invoice #1234 has been paid.",
        "Invoice #1235 is overdue.",
        "You received a new message from support."
    ];

    // Sample paid invoices
    const [paidInvoices] = useState([
        { id: 1, date: '2024-01-15', amount: 1500 },
        { id: 2, date: '2024-01-20', amount: 3000 },
        { id: 3, date: '2024-01-25', amount: 4500 },
    ]);

    return (
        <div className="user-dashboard">
            <h2>User Dashboard</h2>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5>Sales Graph</h5>
                            <Bar data={salesData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5>Notifications</h5>
                            <ul>
                                {notifications.map((notification, index) => (
                                    <li key={index}>{notification}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5>Received Paid Invoices</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paidInvoices.map(invoice => (
                                <tr key={invoice.id}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.date}</td>
                                    <td>${invoice.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;
