'use client'

import { useRouter } from "next/navigation";
import React from "react";



export default function UserCard({currentuser}:any,){

    const router = useRouter();
    
    function confirmdelete( ) {
        var shouldDelete = confirm("DO you really want to delete this user?");
        if(shouldDelete)
        {
            deleteuser();
        }
    };



    async function deleteuser () {
        
    }
    return (


        <div className='card card-side flex items-center' key={currentuser.userid}>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img className='max-w-[150px] h-[100px]' src='/users.png' width='120' height='120' alt='user'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{currentuser.username}</div>
                <p>{currentuser.name != ''?currentuser.name:'Employee'}</p>
                <div className="card-actions grid grid-cols-3">
                    <button className="btn btn-primary" onClick={() => router.push(`/documents/${currentuser.userid}`)}>outstanding documents</button>
                    <button className="btn btn-primary" onClick={() => router.push(`/admin/roles/${currentuser.userid}`)}>View User Roles</button>
                    <button className="btn btn-warning" onClick={() => confirmdelete()}>Delete User</button>
                 </div>
            </div>
        </div>
    )
};