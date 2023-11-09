'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


async function updateTrainingRecord(userid:string,documentid:string){
    const res = await fetch(`http://localhost:8000/api/documents/updateuserdocument`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({userid,documentid}),
    });

}

export default function TrainingRequired({currentdoc}:any){
    const {userid,documentqtid,documenttitle,usercurrentrevision,rev}  = currentdoc || {};   

    
    return (
        <tr key={documentqtid}>
            <td>{documentqtid}</td><td>{documenttitle}</td><td>{usercurrentrevision}</td><td>{rev}</td><td><button className='btn btn-primary' onClick={()=>updateTrainingRecord(userid,documentqtid)}>Update</button></td>
        </tr>
    )

};