'use client'

import { useRouter } from "next/navigation";
import React from "react";



export default function TeamUserCard({currentuser}:any,){

    const router = useRouter();
    
    function confirmRemove(){
        var areyousure = confirm("Are you sure you want to remove this user from the team?");
        if(areyousure){
            removeFromTeam();
            router.refresh();
        }
    }


    async function removeFromTeam(){
        console.log("currentuser = "+JSON.stringify(currentuser));
        const res = await fetch(`http://localhost:8080/api/users/removefromteam/`+currentuser.userid,);
        const c = res.json();
        alert("Please refresh the screen.  Auto refresh is broken at the moment");
        router.replace('http://localhost:3000/admin/team/'+currentuser.team_id);
    };
    
    return (
        <div className='card card-side flex items-center' key={currentuser.userid}>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img className='max-w-[150px] h-[100px]' src='/users.png' width='120' height='120' alt='user'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{currentuser.username}</div>
                <p>{currentuser.jobtitle != ''?currentuser.jobtitle:'Employee'}</p>
                <div className="card-actions justify-end grid grid-cols-2">
                    <button className="btn btn-primary" onClick={() => router.push(`/documents/${currentuser.userid}`)}>outstanding documents</button>
                    <button className="btn btn-secondary" onClick={()=> confirmRemove()}>Remove From Team</button>
                </div>
            </div>
        </div>
    )
};