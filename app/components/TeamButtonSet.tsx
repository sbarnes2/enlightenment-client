'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



function TeamButtonSet (teamid:any):any {
    const router = useRouter();

    function handleAddTeam(teamid:any){router.push('/admin/users/add');}
    function handleManageRoles(){router.push('/admin/roles/team/'+teamid);}
    function handleTeamDocuments(){}

    return (
        <div className='grid gap-4 grid-cols-3 items-center'>
            <button className='btn btn-accent col-span-1' onClick={()=>handleAddTeam(teamid)}>Add Team Member</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleManageRoles}>Manage Team Roles</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleTeamDocuments}>Manage Team Role Documents</button>
        </div>
    );
}

export default TeamButtonSet;

