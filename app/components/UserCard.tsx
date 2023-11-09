'use client'
import React from "react";
import Image from 'react';


export default function Usercard({currentuser}:any){
    return (
        <div className='card flex items-center'>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/user.png' width='120' height='120' alt='user'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{currentuser.username}</div>
                <p>{currentuser.email_address}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">DO Something</button>
                </div>
            </div>
        </div>
    )
};