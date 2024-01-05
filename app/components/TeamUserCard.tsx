
'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";



export default function TeamUserCard({currentuser}:any){
    const router = useRouter();

    function confirmAction(){
        if(isTeamMember())
        {
            var areyousure = confirm("Are you sure you want to remove this user from the team?");
            if(areyousure){
                removeFromTeam();
                router.refresh();
            }
        }else{
            addToTeam();
        }

    }

    const isTeamMember = ()=>{
        if(currentuser.team_id == currentuser.target_team_id)
        {
            button_text = 'delete from team';
            return true;
        }
    }

    var button_class = isTeamMember()?'btn btn-warning':'btn btn-secondary';

    var button_text =  isTeamMember()?'delete from team':'Add to team';


    async function removeFromTeam(){
       
        const res = await fetch(`http://localhost:8080/api/users/removefromteam/`+currentuser.userid,{cache:"no-store"});
        router.replace('http://localhost:3000/admin/team/'+currentuser.team_id);
    };


    async function addToTeam(){


        console.log(JSON.stringify(currentuser));

        const newteammember  = {
            team_id : currentuser.target_team_id,
            user_id:currentuser.userid,
            manager:false,
        }

        console.log('processing new team member'+JSON.stringify(newteammember));
        const response = await fetch('http://localhost:8080/api/users/addusertoteam',{
            method:'POST',
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers:{
                "content-type":"application/json"
            },
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body:JSON.stringify(newteammember)
        });

        router.replace('http://localhost:3000/admin/team/'+currentuser.team_id);
    }

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
                    <button className={`${button_class}`} onClick={()=> confirmAction()}>{button_text}</button>
                </div>
            </div>
        </div>
    )
};