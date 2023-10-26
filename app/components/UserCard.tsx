import React from "react";
import NextFunctionComponent from 'next'

interface User  {
    id: number;
    username: string;
    email_address:string;
    }

const Usercard = (u : User) =>{
    return (
        <div className='item'>
            <div className="name">name: {u.username}</div>
            <div className="email">email: {u.email_address}</div>
        </div>
    )
}

export default Usercard