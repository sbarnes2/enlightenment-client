'use client'

import React from "react";
import Usercard  from '../components/TeamUserCard';


export default function TeamUserCardContainer ({userdata}:any){

    var users:any [] = userdata;

    return (
        <div>

            <div className='grid gap-4 grid-cols-3'>
                {users.map(user =><Usercard key={user.userid} currentuser={user}/>)}
            </div>
        </div>
    );
}