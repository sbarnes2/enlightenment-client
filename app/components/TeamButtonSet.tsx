'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



function TeamButtonSet (params:any):any {
    const router = useRouter();

    console.log(JSON.stringify(params));
    const teamid = params.team_id.id;

    function handleAddTeam(teamid:any){router.push('/admin/users/add');}
    function handleManageRoles(teamid:any){router.push('/admin/roles/team/'+teamid);}
    function handleTeamDocuments(teamid:any){router.push('/admin/roles/team/'+teamid);}

    return (
        <div className='grid gap-4 grid-cols-3 items-center'>
            <button className='btn btn-accent col-span-1' onClick={()=>handleAddTeam(teamid)}>Add Team Member</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleManageRoles(teamid)}>Manage Team Roles</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleTeamDocuments(teamid)}>Manage Team Role Documents</button>
        </div>
    );
}

export default TeamButtonSet;

