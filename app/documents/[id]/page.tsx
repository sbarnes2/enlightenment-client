import React from 'react'
import TrainingRequired from '../../components/TrainingRequired';

async function getUserData(userid:number){
    const user_c =  await fetch(`http://localhost:8080/api/users/user/${userid}`,{ cache: 'no-store' });
    return user_c.json();
};

async function getDocumentData(userid:number){
    const res =  await fetch(`http://localhost:8080/api/documents/getdocumentsbyuserid/${userid}`,{ cache: 'no-store' });
    return res.json();
};


const DocumentsPage  = async ({params}:any) => {
    const current_user:u [] = await getUserData(params.id);
    const docs : userdocumentstatusitem [] = await getDocumentData(params.id);

    return (

    <div className='overflow-x-auto'>
        <p>{current_user[0].firstname} please review the following documents :</p>
        <br></br>
            {<table className='table table-bordered'>
                <thead><tr><th className=''>Document Number</th><th>Document Name</th><th>Current Document Revision</th><th>Target Document Revision</th></tr></thead>
                <tbody>
                    {docs.map(doc =>
                        <TrainingRequired key={doc.documentqtid} currentdoc={doc}/>
                    )}
                </tbody>
            </table>
 }
    </div>
  )
}  

export default DocumentsPage;