'use client'
import React from "react";
import NextFunctionComponent from 'next'
import { useRouter } from 'next/navigation'


const DocumentCard = ({d}:any) =>{


    const router = useRouter();

    function goToDocument(id:number){
        router.push('https://mybinxhealth.qt9app1.com/documents.aspx?docid='+id);
    }

    console.log(JSON.stringify(d));
    return  (
        <div className="card top-10">
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                 <img src='/document.png' width='80' height='80' alt='user'/>
            </figure>
            <div className="card-body flex items-center">
                <div className="card-title">{d.documentnumber}</div>
                <p>{d.documentname}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>goToDocument(d.doc_id)}>View</button>
                </div>
            </div>
        </div>
    );
}

export default DocumentCard;


