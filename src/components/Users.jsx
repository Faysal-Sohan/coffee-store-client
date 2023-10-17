import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDeleteUser = id => {
        fetch(`https://coffee-store-server-orcin-mu.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
            alert('User Deleted Successfully!')
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id} className="bg-base-200">
                            <th>{idx + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user?.lastLoggedIn}</td>
                            <td><button onClick={() => handleDeleteUser(user._id)} className="btn">X</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;