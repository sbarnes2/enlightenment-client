import React from 'react';
import NextFunctionComponent from 'next';
import ManagerReports from './ManagerReports';

type Manager = {
    id: number;
    username: string;
    email_address:string;
    reports:any;
}

const Managerdetail = (m: Manager) =>{
    return (
        <ul>
            <li key={m.id}>name : {m.username}</li>
            <li>{m.email_address}</li>
            <line></line>
        </ul>
    );
};