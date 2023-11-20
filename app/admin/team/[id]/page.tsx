
import React from 'react'
import TeamUserCard  from '../../../components/TeamUserCard';
import TeamButtonSet from '../../../components/TeamButtonSet';

    
const TeamMembersPage  = async ({params}:any) => {
    //const router = useRouter();

    const res = await fetch(`http://localhost:8080/api/users/getteammembers/${params.id}`, { cache: 'no-store' });
    var users : uAPI [] = await res.json();



    return (
    <div className='pt-10'>
        <h5 className='text-5xl items-center'>Team Members</h5>
        <div className='card pt-10 items-center' >
            <TeamButtonSet team_id={params.id}/>
        </div>
        <div className='grid gap-4 grid-cols-3 pt-10'>
            {users.map(user =><TeamUserCard key={user.id} currentuser={user}/>)}
        </div>
    </div>
  );}
export default TeamMembersPage