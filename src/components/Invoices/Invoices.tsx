import React, { useState } from 'react';

const Invoices: React.FC = () => {
    // Sample data for invoices
    const [invoices] = useState([
        { id: 1, date: '2024-01-15', amount: 1500, status: 'paid' },
        { id: 2, date: '2024-01-20', amount: 3000, status: 'due' },
        { id: 3, date: '2024-01-25', amount: 4500, status: 'paid' },
        { id: 4, date: '2024-02-01', amount: 2000, status: 'due' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    
    // Calculate totals
    const totalInvoices = invoices.length;
    const totalPaid = invoices.filter(inv => inv.status === 'paid').length;
    const totalDue = invoices.filter(inv => inv.status === 'due').length;

    const filteredInvoices = invoices.filter(invoice =>
        invoice.id.toString().includes(searchTerm)
    );

    return (
        <div>
            <h2>Invoices Page</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Invoice ID"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="form-control"
                    style={{ width: '300px', display: 'inline-block' }}
                />
                <button className="btn btn-primary ms-2">Add New Invoice</button>
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5>Total Invoices</h5>
                            <p>{totalInvoices}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5>Paid Invoices</h5>
                            <p>{totalPaid}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5>Due Invoices</h5>
                            <p>{totalDue}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5>Invoices Table</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInvoices.map(invoice => (
                                <tr key={invoice.id}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.date}</td>
                                    <td>${invoice.amount}</td>
                                    <td>{invoice.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Invoices;
