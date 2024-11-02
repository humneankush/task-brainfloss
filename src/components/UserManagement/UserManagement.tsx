import React, { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
    
    const [newUser, setNewUser] = useState<{ name: string; email: string }>({
        name: '',
        email: '',
    });

    const addUser = () => {
        if (newUser.name && newUser.email) {
            const nextId = users.length ? users[users.length - 1].id + 1 : 1;
            setUsers([...users, { id: nextId, ...newUser }]);
            setNewUser({ name: '', email: '' }); // Clear input fields
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <div className="mb-4">
                <h5>Add New User</h5>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="form-control"
                    style={{ width: '300px', display: 'inline-block', marginRight: '10px' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="form-control"
                    style={{ width: '300px', display: 'inline-block', marginRight: '10px' }}
                />
                <button className="btn btn-primary" onClick={addUser}>Add User</button>
            </div>

            <h5>User List</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
