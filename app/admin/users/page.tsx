import React from 'react'
import Usercard from '@/app/components/Usercard';


    
const UsersPage  = async ({params}:any) => {

    const res = await fetch('http://localhost:8080/api/users/all', { cache: 'no-store' });
    var users : uAPI [] = await res.json();
    return (
    <div className='pt-10'>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(user =><Usercard key={user.id} currentuser={user}/>)}
        </div>
    </div>
  );}
export default UsersPage