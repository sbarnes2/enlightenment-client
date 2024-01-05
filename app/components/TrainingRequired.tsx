'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';


export default function TrainingRequired({currentdoc}:any){
    //const {userid,documentid,documentqtid,documenttitle,usercurrentrevision,rev}  = currentdoc || {};
    const {userid,userrstateid,doc_id,documentcode,documentname,usercurrentrevision,rev,risklevel}  = currentdoc || {};

    const router = useRouter();

    const processtrainingrecord = async () =>{
        //get the documents priority
        const res_priority = await fetch('',{cache:"no-store"});
        const priority = await res_priority.json();

        if(priority==='high'){
            //notify the users manager to complete update of the training record.
         } 
         updateTrainingRecord(false);
        router.push(`/documents/${userid}`);
    }
    
    async function updateTrainingRecord(provisional:boolean){
        const res = await fetch(`http://localhost:8000/api/documents/updateuserdocument`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({userid,userrstateid,provisional}),
        });
    }


    return (
        <tr key={userrstateid}>
            <td><Link href={{ 
                pathname:'https://mybinxhealth.qt9app1.com/documents.aspx',
                query: {docid: doc_id}
                }}
                >
                    {documentcode}</Link>
                </td>
            <td>{documentname}</td><td>{usercurrentrevision}</td><td>{rev}</td><td>{risklevel}</td><td><button className='btn btn-primary' onClick={()=>processtrainingrecord()}>mark as Trained</button></td>
        </tr>
    )

};