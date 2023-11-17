'use client'

import { useRouter } from "next/navigation";
import React from "react";



export default function Usercard({currentuser}:any,){

    const router = useRouter();

    async function removeFromTeam(id:string){

            const res = await fetch(``,);

    };

    return (
        <div className='card card-side flex items-center'>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img className='max-w-[150px] h-[100px]' src='/users.png' width='120' height='120' alt='user'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{currentuser.username}</div>
                <p>{currentuser.job_title == ''?currentuser.job_title:'Employee'}</p>
                <div className="card-actions justify-end grid grid-cols-2">
                    <button className="btn btn-primary" onClick={() => router.push(`/documents/${currentuser.id}`)}>outstanding documents</button>
                    <button className='btn btn-secondary' onClick={()=>(currentuser.team_id>0)?removeFromTeam(`${currentuser.id}`):router.push(`/admin/teamlist/${currentuser.id}`)}>{(currentuser.team_id>0)?'Remove From Team':'Add To Team'}</button>
                </div>
            </div>
        </div>
    )
};