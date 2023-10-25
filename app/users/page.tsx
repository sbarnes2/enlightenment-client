import React from 'react'
import { document } from 'postcss'
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
        <h1>Users Page</h1>
        <h2>Shows a list of users</h2>
        <ul>
            <div>{users.map(user =>
                <li key={user.id}>
                    <Usercard id={user.id} username={user.username} email_address={user.email_address}/>
            </li>)};
            </div>
        </ul>
    </div>
  )
}

export default UsersPage
