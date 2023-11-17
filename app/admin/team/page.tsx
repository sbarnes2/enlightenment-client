import React from 'react'
import TeamCard from '@/app/components/TeamCard';

    
const ManagersPage  = async () => {
    const res = await fetch('http://localhost:8080/api/users/getmanagers');
    const users : uAPI [] = await res.json();
    return (
    <div className='pt-10'>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(u =><TeamCard key={u.id} currentuser={u}/>)}
        </div>
    </div>
  );}
export default ManagersPage