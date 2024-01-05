'use client'
import React from "react";
import NextFunctionComponent from 'next'
import { useRouter } from 'next/navigation'


const DocumentCard = ({d}:any) =>{


    const router = useRouter();

    function goToDocument(id:number){
        router.push('https://mybinxhealth.qt9app1.com/documents.aspx?docid='+id);
    }

    function assignToTeam(id:number){
        router.push('http://localhost:3000/');
    }

    return  (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <div className="card-title">{d.documentnumber}</div>
                <p>{d.documentcode}</p>
                <p>{d.documentname}</p>
                <p>Revision : {d.rev}</p>
                <div className="card-actions justify-end">
                    <button className="btn" onClick={()=>goToDocument(d.doc_id)}>View</button>
                    <button className="btn" onClick={()=>assignToTeam(d.doc_id)}>Assign</button>
                </div>
            </div>
        </div>
    );
}

export default DocumentCard;


