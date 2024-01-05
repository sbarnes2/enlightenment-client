import React from 'react'
import Usercard from '@/app/components/UserCard';
import UserButtonSet from '@/app/components/UserButtonSet';


    
const UsersPage  = async ({params}:any) => {

    const res = await fetch('http://localhost:8080/api/users/all', { cache: 'no-store' });
    var users : uAPI [] = await res.json();
    return (
    <div className='pt-10'>
        <h5 className='text-5xl items-center'>Users</h5>
        <div className='items-left' >
            <UserButtonSet team_id={params.id}/>
        </div>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(user =><Usercard key={user.id} currentuser={user}/>)}
        </div>
    </div>
  );}
export default UsersPage