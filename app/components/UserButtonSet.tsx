'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



function UserButtonSet (userid:any):any {
    const router = useRouter();
    const id = 4;

    function handleAddUser(){router.push('/admin/users/add/'+id);}
    function handleManageRoles(){router.push('@/admin/roles');}
    function handleTeamDocuments(){}

    return (
        <div className='grid gap-4 grid-cols-3 items-center'>
            <button className='btn btn-accent col-span-1' onClick={()=>handleAddUser()}>Add New User</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleManageRoles}>Manage Roles</button>
            <button className='btn btn-accent col-span-1' onClick={()=>handleTeamDocuments}>Manage Team Role Documents</button>
        </div>
    );
}

export default UserButtonSet;