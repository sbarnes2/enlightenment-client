'use client'
import React from "react";
import NextFunctionComponent from 'next'

function goToDocument(id:number){

}



const DocumentCard = ({d}:any) =>{

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
                    <button className="btn btn-primary" onClick={()=>{alert(d.id)}}>Trainee</button>
                </div>
            </div>
        </div>
    );
}

export default DocumentCard;


