import React from 'react'
import Usercard  from '../../../components/Usercard';


    
const UsersPage  = async ({params}:any) => {

    const res = await fetch('http://localhost:8080/api/users/all', { cache: 'no-store' });
    var users : uAPI [] = await res.json();

    if(params !=null && params.id>-1){
        users = users.filter(user => user.manager_id == params.id as number);
    }

    return (
    <div className='pt-10'>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(user =><Usercard key={user.id} currentuser={user}/>)}
        </div>
        <button className='btn btn-primary'>Add Team Member</button>
    </div>
  );}
export default UsersPage