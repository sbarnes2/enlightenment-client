import React from 'react'
import Usercard  from '../components/Usercard';

    
const UsersPage  = async () => {
    const res = await fetch('http://localhost:8080/api/users/all');
    const users : user [] = await res.json();
    return (
    <div className='pt-10'>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(u =><tr key={u.id}><Usercard currentuser={u}/></tr>)}
        </div>
    </div>
  );}
export default UsersPage