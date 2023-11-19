
import React from 'react'
import Usercard  from '../../../components/Usercard';


    
const TeamMembersPage  = async ({params}:any) => {


    const res = await fetch(`http://localhost:8080/api/users/getteammembers/${params.id}`, { cache: 'no-store' });
    var users : uAPI [] = await res.json();


    console.log("result is "+JSON.stringify(users));

    return (
    <div className='pt-10'>
        <h5 className='text-5xl'>Team Members</h5>
        <div className='grid gap-4 grid-cols-3'>
            {users.map(user =><Usercard key={user.id} currentuser={user}/>)}
        </div>
        <button className='btn btn-primary'>Add Team Member</button>
    </div>
  );}
export default TeamMembersPage