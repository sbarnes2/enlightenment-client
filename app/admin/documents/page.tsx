


import DocumentCard from '@/app/components/DocumentCard';
import React from 'react';

const documents = async ()=>{

    const result = await fetch(`http://localhost:8080/api/documents/all`,{cache:'no-store'});
    const docs : any [] = await result.json();

    return (
        <div className='container mx-auto py-10'>
            <div className='container py-10 items-center'>
                <input type="text" placeholder="Search...." className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-accent'>go!</button>
            </div>
            <div className='grid gap-8 grid-cols-4'>
                {docs.map( doc =><DocumentCard key={doc.doc_id} d={doc}/>)}
            </div>
        </div>
    );
}

export default documents;