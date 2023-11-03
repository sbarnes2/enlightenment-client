import React from 'react'
import Usercard from '../components/UserCard'

interface user {
    id: number;
    username: string;
    email_address:string;
    }
    
const UsersPage  = async () => {
    const res = await fetch('http://localhost:8080/api/users/all');
    const users : user [] = await res.json();
    return (
    <div>
        <table className='table table-lg table-bordered'>
            <thead><tr><th>Name</th><th>Email Address</th><th>Action</th></tr></thead>
            <tbody>
                {users.map(user =><tr key={user.id}><td>{user.username}</td><td>{user.email_address}</td><td><button className='btn btn-primary'>Edit</button></td></tr>)}
            </tbody>
            
        </table>
    </div>
  );}
export default UsersPage