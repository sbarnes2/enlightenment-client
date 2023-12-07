'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



function TeamButtonSet (params:any):any {
    const router = useRouter();
    const team_id = params.team_id;

    function handleAddToTeam(){router.push('/admin/users/'+team_id);}
    function handleManageRoles(){router.push('/admin/roles/team/'+team_id);}
    function handleTeamDocuments(){}

    return (
        <div className='grid gap-4 grid-cols-3 items-center'>
            <button className='btn btn-accent col-span-1' onClick={()=>handleAddToTeam()}>Manage Team Members</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleManageRoles()}>Manage Team Roles</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleTeamDocuments()}>Manage Role Documents</button>
        </div>
    );
}

export default TeamButtonSet;

