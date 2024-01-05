'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



function UserButtonSet (userid:any):any {
    const router = useRouter();

    console.log(JSON.stringify(userid));

    const id = userid;

    function handleAddUser(){router.push('/admin/users/add/'+id);}

    return (
        <div className='px-5 my-10'>
            <button className='btn btn-accent col-span-1' onClick={()=>handleAddUser()}>Add New User</button>
        </div>
    );
}

export default UserButtonSet;