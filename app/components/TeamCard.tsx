'use client'
import React from "react";
import { useRouter } from "next/navigation";


export default function TeamCard({currentuser}:any){

    const router = useRouter();

    return (
        <div className='card flex card-side items-center'>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/team.png' className='max-w-[100px] h-[80px]' alt='team'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{currentuser.username}</div>
                <p>{currentuser.jobtitle}</p>
                <p>{currentuser.teamname}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>router.push(`/admin/team/${currentuser.teamid}`)}>TEAM members</button>
                </div>
            </div>
        </div>
    )
};
