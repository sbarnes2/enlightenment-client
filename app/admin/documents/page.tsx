


import DocumentCard from '@/app/components/DocumentCard';
import { env } from 'process';
import React from 'react';




const documents = async ()=>{

    const result = await fetch(`http://localhost:8080/api/documents/all`,{cache:'no-store'});
    const docs : any [] = await result.json();

    return (
        <div>
            <div className='grid gap-4 grid-cols-2'>
                {docs.map( doc =><DocumentCard key={doc.doc_id} d={doc}/>)}
            </div>
        </div>
    );
}


export default documents;