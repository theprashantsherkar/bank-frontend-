import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import axios from 'axios';
import { backendUrl } from '../../App';

function Transactions() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/v1/banker/getUsers`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                });
                if (response.data.success) {
                    setUsers(response.data.rows);
                    setLoading(false);
                } else {
                    console.error(response.data.message);
                }
            } catch(err) {
                console.error(err);
            }
        }
        fetchUsers();
    })
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Navbar classname={`static`} />
            <div className='h-screen  flex flex-col items-center justify-start  bg-gray-200 w-full p-8 gap-4'>
                {users.map((user, index) => (
                    <div className='flex  items-center justify-around gap-2 bg-white shadow-2xl shadow-gray-300 rounded-2xl w-1/2 h-[120px] border border-gray-400 ' key={index}>
                        <div className='flex flex-col items-start justify-center w-1/2 h-full px-6'>
                            <p>Account Id: {user.id }</p>
                            <h1>Owner's Name: { user.username}</h1>
                            <p>Email: { user.email}</p>
                        </div>
                        <div className='flex flex-col items-end justify-end p-5 w-1/2 h-full '>
                            <Button label={"View Transactions"} >
                                View Transactions
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Transactions