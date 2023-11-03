import React from 'react'
import Userdocument from '../components/Userdocument'

interface userdocumentstatusitem{
    userid:number;
    username:string;
    email_address:string;
    documentqtid:string;
    documenttitle:string;
    usercurrentrevision:string;
    rev:string;
};

interface u {
    id: number;
    username: string;
    email_address:string;
    firstname:string;
    surname:string;
};

function handleClick (){
    console.log('clicked');
}


const DocumentsPage  = async () => {
  
    const userid:number = 1;  
    const user_c = await fetch(`http://localhost:8080/api/users/user/${userid}`,);
    const current_user : u [] = await user_c.json();

    const res = await fetch(`http://localhost:8080/api/documents/getdocumentsbyuserid/${userid}`,);
    const docs : userdocumentstatusitem [] = await res.json();

    return (
    <div className='overflow-x-auto'>
        <p>{current_user[0].firstname} please review the following documents :</p>
        <br></br>
            <table className='table table-lg table-bordered'>
                <thead><tr><th className=''>Document Number</th><th>Document Name</th><th>Current Document Revision</th><th>Target Document Revision</th></tr></thead>
                <tbody>
                {docs.map(doc =>
                    <tr key={doc.documentqtid}>
                        <td>{doc.documentqtid}</td>
                        <td>{doc.documenttitle}</td>
                        <td className=''>{doc.usercurrentrevision}</td>
                        <td className=''>{doc.rev}</td>
                        <td><button className='btn btn-primary' >Update</button></td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>
  )
}  

export default DocumentsPage;