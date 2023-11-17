


import DocumentCard from '@/app/components/DocumentCard';
import { env } from 'process';
import React from 'react';




const documents = async ()=>{

    const result = await fetch(`${env.API_HOST_BASE}/api/documents/all`);
    const docs : DocumentCardItem [] = await result.json();

    return (
        <div>
            <div className='grid gap-4 grid-cols-4'>
                {docs.map( doc =><DocumentCard key={doc.id} d={doc}/>)}
            </div>
        </div>
    );
}


export default documents;