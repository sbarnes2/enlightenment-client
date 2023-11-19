'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';


export default function TrainingRequired({currentdoc}:any){
    //const {userid,documentid,documentqtid,documenttitle,usercurrentrevision,rev}  = currentdoc || {};
    const {userid,userrstateid,doc_id,documentnumber,documentname,usercurrentrevision,rev,risklevel}  = currentdoc || {};

    const router = useRouter();

    const updatetrainingrecord = async () =>{
        const res = await fetch(`http://localhost:8000/api/documents/updateuserdocument`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({userid,userrstateid}),
        });
        router.push(`/documents/${userid}`);
    }
    
    return (
        <tr key={userrstateid}>
            <td><Link href={{ 
                pathname:'https://mybinxhealth.qt9app1.com/documents.aspx',
                query: {docid: doc_id}
                }}
                >
                    {documentnumber}</Link>
                </td>
            <td>{documentname}</td><td>{usercurrentrevision}</td><td>{rev}</td><td>{risklevel}</td><td><button className='btn btn-primary' onClick={()=>updatetrainingrecord()}>mark as Trained</button></td>
        </tr>
    )

};