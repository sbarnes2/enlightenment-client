import React from 'react'
import DocumentCard from '../components/DocumentCard'


interface document {
    id: number;
    documentname: string; 
    documentcode: string;
    documenttype: string;
    documentnumber: string;
    risklevel: string;
    }


const DocumentsPage  = async () => {
    const res = await fetch('http://localhost:8080/api/documents/all');
    const docs : document [] = await res.json();
    return (
    <div>
        <h1>Documents List</h1>
        <ul>
            {docs.map(doc => 
            <li key={doc.id}> 
                <DocumentCard 
                id={doc.id}
                documentcode={doc.documentcode}
                documentnumber={doc.documentnumber} 
                documentname={doc.documentname}
                documenttype={doc.documenttype}
                risklevel={doc.risklevel}
                />
            </li>)}
        </ul>
    </div>
  )
}

export default DocumentsPage;